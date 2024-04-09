import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE, KEY, API_URL_2 } from './config.js';
// import { getJSON, sendJSON } from './helpers.js';
import { AJAX, AJAX2, AJAX3 } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: [],
    resultsRecipes: [],
    page: 1,
    noOfResultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
  ingredientsList: [],
  mealPlan: {
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
  },
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    nutrients: {
      calories: 0,
      totalFat: 0,
      saturatedFat: 0,
      cholesterol: 0,
      sodium: 0,
      potassium: 0,
      totalCarbohydrates: 0,
      dietaryFibers: 0,
      sugars: 0,
      protein: 0,
      phosphorus: 0,
    },
    planSet: {},
    ...(recipe.key && { key: recipe.key }),
  };
};

const arrayOfRecipeObject = function (data) {
  const sortFilter = data.map(rec => {
    const { recipe } = rec.data;
    return {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      image: recipe.image_url,
      ...(recipe.key && { key: recipe.key }),
      cookingTime: recipe.cooking_time,
      noOfIngredients: recipe.ingredients.length,
      planSet: {},
    };
  });
  return sortFilter;
};

// const createNutritionDataObject = function (data) {
//   return {
//     calories: 0,
//     totalFat: 0,
//     saturatedFat: 0,
//     cholestorol: 0,
//     sodium: 0,
//     potassium: 0,
//     totalCarbohydrates: 0,
//     dietaryFibers: 0,
//     sugars: 0,
//     protein: 0,
//     potassium: 0,
//     phosphorus: 0,
//   };
// };

const persistStorage = function (name, data) {
  localStorage.setItem(name, JSON.stringify(data));
};

const idGenerator = function () {
  return (
    Date.now() +
    (Math.random() * 100000).toFixed() +
    Math.floor(new Date().valueOf() * Math.random())
  );
};

export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);

    state.recipe = createRecipeObject(data);

    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (err) {
    throw err;
  }
};

const mealPlanSetBoolean = function (result) {
  result.forEach(rec => {
    Object.keys(state.mealPlan).forEach(day => {
      if (state.mealPlan[day].some(meal => meal.id === rec.id))
        rec.planSet[day] = true;
      else {
        rec.planSet[day] = false;
      }
    });
  });
};

export const loadSearchResultsRecipe = async function (ids) {
  try {
    idsArray = ids.map(id => `${API_URL}${id}?key=${KEY}`);
    const data = await AJAX2(idsArray);
    state.search.resultsRecipes = arrayOfRecipeObject(data);

    mealPlanSetBoolean(state.search.resultsRecipes);
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        planSet: {},
        ...(rec.key && { key: rec.key }),
      };
    });

    mealPlanSetBoolean(state.search.results);

    state.search.page = 1;
  } catch (err) {
    throw err;
  }
};

export const loadNutritionData = async function () {
  try {
    const query = state.recipe.ingredients
      .map(ing => `${ing.quantity} ${ing.unit} ${ing.description}`)
      .join(', ');

    const uploadData = {
      query: `${query}`,
      num_servings: state.recipe.servings,
      timezone: 'WEST AFRICA',
    };

    const data = await AJAX3(`${API_URL_2}`, uploadData);

    data.foods.forEach(ing => {
      const nutrient = state.recipe.nutrients;

      nutrient.calories += ing.nf_calories;
      nutrient.totalFat += ing.nf_total_fat;
      nutrient.saturatedFat += ing.nf_saturated_fat;
      nutrient.cholesterol += ing.nf_cholesterol;
      nutrient.sodium += ing.nf_sodium;
      nutrient.potassium += ing.nf_potassium;
      nutrient.totalCarbohydrates += ing.nf_total_carbohydrate;
      nutrient.dietaryFibers += ing.nf_dietary_fiber;
      nutrient.sugars += ing.nf_sugars;
      nutrient.protein += ing.nf_protein;
      nutrient.phosphorus += ing.nf_p;
    });
  } catch (err) {
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  state.search.resultsRecipes = [];

  const start = (page - 1) * state.search.noOfResultsPerPage; // 0
  const end = page * state.search.noOfResultsPerPage; // 9

  state.search.resultsPerPage = state.search.results.slice(start, end);
  return state.search.resultsPerPage;
};

export const getSearchResultsPageIds = function () {
  return getSearchResultsPage().map(rec => rec.id);
};

export const sortRecipes = function (recipesPerPage, key) {
  if (key === 'default') {
    state.search.resultsRecipes = state.search.resultsPerPage;
  }

  if (key === 'cookingTime' || key === 'noOfIngredients') {
    state.search.resultsRecipes = recipesPerPage
      .slice()
      .sort((a, b) => b[key] - a[key]);
  }
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    // newQt * oldQt * newServings // 2 * 8 / 4 * 4
  });

  Object.keys(state.recipe.nutrients).forEach(nutrient => {
    state.recipe.nutrients[nutrient] =
      (state.recipe.nutrients[nutrient] * state.recipe.servings) / newServings;
    // newQt * oldQt * newServings // 2 * 8 / 4 * 4
  });

  state.recipe.servings = newServings;
};

const setBoolean = (result, id, day, bool) => {
  result.forEach(rec => {
    if (id === rec.id) rec.planSet[day] = bool;
  });
};

export const addMealPlan = function (recipe, day) {
  // Add bookmark
  state.mealPlan[day].push(recipe);

  // Mark the recipe in the array of results and sorted results per page to reflect on page update
  setBoolean(state.search.resultsRecipes, recipe.id, day, true);
  setBoolean(state.search.results, recipe.id, day, true);

  persistStorage('mealPlan', state.mealPlan);
};

export const deleteMealPlan = function (id, day) {
  // Delete bookmark
  const index = state.mealPlan[day].findIndex(el => el.id === id);
  state.mealPlan[day].splice(index, 1);

  // Mark the recipe in the array of results and sorted results per page to reflect on page update
  setBoolean(state.search.resultsRecipes, id, day, false);
  setBoolean(state.search.results, id, day, false);

  persistStorage('mealPlan', state.mealPlan);
};

export const previewDataToUpdate = function (id) {
  return (
    state.search.resultsRecipes.length !== 0
      ? state.search.resultsRecipes
      : state.search.resultsPerPage
  ).find(meal => meal.id === id);
};

export const addIngredients = function (ing) {
  // Create Unique dataset Id
  ing.forEach((eachIng, i) => {
    const id = idGenerator();

    eachIng.id = id;

    //Deep clone the array to avoid mutation  due to continous alteration
    const eachIngDeepcopy = JSON.parse(JSON.stringify(eachIng));

    // Add Ingredient
    state.ingredientsList.push(eachIngDeepcopy);
  });

  persistStorage('ingredients', state.ingredientsList);
};

export const deleteIngredients = function (data) {
  // Delete recipe
  const index = state.ingredientsList.findIndex(
    el => el.id === data.dataset.id
  );
  state.ingredientsList.splice(index, 1);

  persistStorage('ingredients', state.ingredientsList);
};

export const deleteAllIngredients = function () {
  state.ingredientsList = [];

  persistStorage('ingredients', state.ingredientsList);
};

export const addBookmark = function (recipe) {
  // Add bookmark
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmarked
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistStorage('bookmarks', state.bookmarks);
};

export const deleteBookmark = function (id) {
  // Delete bookmark
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  // Mark current recipe as not bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistStorage('bookmarks', state.bookmarks);
};

const init = function () {
  const bookmarksStorage = localStorage.getItem('bookmarks');
  const ingredientsStorage = localStorage.getItem('ingredients');
  const mealPlanStorage = localStorage.getItem('mealPlan');
  if (bookmarksStorage) state.bookmarks = JSON.parse(bookmarksStorage);
  if (ingredientsStorage)
    state.ingredientsList = JSON.parse(ingredientsStorage);
  if (mealPlanStorage) state.mealPlan = JSON.parse(mealPlanStorage);
};
init();

const clearBookmarks = function () {
  localStorage.removeItem('bookmarks');
};
// clearBookmarks();

const clearIngredients = function () {
  localStorage.removeItem('ingredients');
};
// clearIngredients();

const clearMealPlan = function () {
  localStorage.removeItem('mealPlan');
};
// clearMealPlan();

export const uploadRecipe = async function (newRecipe, ingredient) {
  try {
    const unfilteredIngredients = ingredient.map(ing => {
      const ingArr = ing.map(el => el.value.trim());

      if (ingArr[1] === '' && ingArr[2] === '') return;

      const [quantity, unit, description] = ingArr;

      return { quantity: quantity ? +quantity : null, unit, description };
    });

    const ingredients = unfilteredIngredients.filter(ing => ing !== undefined);

    const recipe = {
      title: newRecipe.title,
      publisher: newRecipe.publisher,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      servings: +newRecipe.servings,
      cooking_time: +newRecipe.cookingTime,
      ingredients,
    };

    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};
