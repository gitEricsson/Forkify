import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import sortResultsView from './views/sortResultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import mealPlanView from './views/mealPlanView.js';
import ingredientsListView from './views/ingredientsListView.js';
import addIngredientFieldView from './views/addIngredientFieldView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';
import previewUpdateDaysView from './views/previewUpdateDaysView.js';
import nutritionDataView from './views/nutritionDataView.js';

if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 0) Close Ingredient List
    ingredientsListView.closeList();

    // 1) Update results view to mark selected search result by the sorted results per page if it exists, else it updates by it's default results per page
    resultsView.update(
      model.state.search.resultsRecipes.length !== 0
        ? model.state.search.resultsRecipes
        : model.state.search.resultsPerPage
    );

    // 2) Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    // 3) Loading Recipe
    await model.loadRecipe(id);

    // 4) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // Show results tab for mobile devices
    if (window.innerWidth < 900) resultsView.toggleWindow();

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    // 4) Render sort icon
    sortResultsView.renderIcon();

    // 5) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    resultsView.renderError(
      "Search couldn't complete! Kindly check your connection and try again :)"
    );
  }
};

const controlNutritionData = async function () {
  try {
    // Add Spinner on the button

    // await API fetch & asign values to the response data and save it into the model.state.recipe
    await model.loadNutritionData();

    // reset this._loading to false
    recipeView.nutrientDataNotLoading();

    // Input Nutrient Values
    recipeView.update(model.state.recipe);

    // Hide button
    recipeView.removeButton();

    // Show the nutrition div
    recipeView.showNutrientData();

    //Deal with the update Servings
  } catch (err) {
    resultsView.renderError(
      "Search couldn't complete! Kindly check your connection and try again :)"
    );
  }
};

const controlSort = async function (key) {
  try {
    resultsView.renderSpinner();

    // 1) Load  recipe details to be sorted
    await model.loadSearchResultsRecipe(model.getSearchResultsPageIds());

    // 2) Sorts the visible Recipe Search Results
    model.sortRecipes(model.state.search.resultsRecipes, key);

    // 3) Render NEW results based on sort filter
    resultsView.render(model.state.search.resultsRecipes);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlPagination = function (goToPage) {
  // 1) Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Equates the sorted results per page state to the defaut results per page
  model.sortRecipes('', 'default');

  // 3) Return sort icon to default
  sortResultsView.renderIcon();

  // 4) Render NEW pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  nutritionDataView.nutrientDataIsHidden(recipeView.nutrientDataIsHidden());

  // remove or add hidden then update
  nutritionDataView.update(model.state.recipe, true);
};

const controlAddMealPlan = function (data, day, id, mealPlanDel = false) {
  // // 1) Add/Remove meal plan through the previewView
  if (!mealPlanDel) {
    // Add
    if (!model.previewDataToUpdate(data.id).planSet[day])
      model.addMealPlan(data, day);
    // Remove
    else model.deleteMealPlan(data.id, day);
  }

  // 1) Remove meal through the mealPlanView
  if (mealPlanDel) {
    model.deleteMealPlan(id, day);

    // Remove highlight on preview planned day depending on whether the preview day select div is hidden or not
    if (
      (model.state.search.resultsPerPage.length ||
        model.state.search.resultsRecipes.length) &&
      resultsView.previewToUpdate(id).elem // incase the meal instead in the current list of recipe being displayed
    ) {
      // set the parent element
      previewUpdateDaysView.setParentElement(
        resultsView.previewToUpdate(id).elem
      );

      // designate to a variable whether the "days of the week"/meal plan selector is open or not
      previewUpdateDaysView.weekIsHidden(
        resultsView.previewToUpdate(id).weekIsHidden
      );

      // get the data from resultsPerPage/resultsRecipes
      model.previewDataToUpdate(id);

      // remove or add hidden then update
      previewUpdateDaysView.update(model.previewDataToUpdate(id), true);
    }
  }

  //2) Set the parent element for the day
  mealPlanView.setParentElement(day);

  // 3) Render meal plan
  mealPlanView.render(model.state.mealPlan[day]);
};

const controlMealPlan = function () {
  Object.keys(model.state.mealPlan).forEach(day => {
    if (!model.state.mealPlan[day].length) return;

    //1) Set the parent element for the day
    mealPlanView.setParentElement(day);

    // 2) Render meal plan
    mealPlanView.render(model.state.mealPlan[day]);
  });
};

const controlAddIngredients = function (dataToRemove, remove = false) {
  // 1) Add ingredients
  if (!remove) model.addIngredients(model.state.recipe.ingredients);
  else model.deleteIngredients(dataToRemove);

  // 2) Render ingredients
  ingredientsListView.render(model.state.ingredientsList);
};

const controlDeleteAllIngredients = function () {
  if (!model.state.ingredientsList.length) return;

  // 1) Delete all items from localStorage
  model.deleteAllIngredients();

  // 2) Render ingredients
  ingredientsListView.render(model.state.ingredientsList);
};

const controlIngredients = function () {
  if (!model.state.ingredientsList.length) return;
  ingredientsListView.render(model.state.ingredientsList);
};

const controlCloseIngredients = function () {
  ingredientsListView.closeList();
};

const controlAddBookmark = function () {
  // 1) Add/Remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe, ingredients) {
  try {
    // Show loading spinner
    addRecipeView.renderSpinner();

    // Upload the new recipe data
    await model.uploadRecipe(newRecipe, ingredients);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Success message
    addRecipeView.renderMessage();

    //Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  ingredientsListView.addHandlerRender(controlIngredients);
  mealPlanView.addHandlerRender(controlMealPlan);
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServingsWrap(controlServings);
  recipeView.addHandlerAddIngredientsWrap(
    controlAddIngredients,
    controlCloseIngredients
  );
  recipeView.addHandlerAddBookmarkWrap(controlAddBookmark);
  recipeView.addHandlerNutritionDataWrap(controlNutritionData);
  ingredientsListView.addHandlerRemoveIngredients(controlAddIngredients);
  ingredientsListView.addHandlerRemoveAllIngredients(
    controlDeleteAllIngredients
  );
  resultsView.addHandlerWeek(controlAddMealPlan);
  mealPlanView.addHandlerRemoveMeal(controlAddMealPlan);
  searchView.addHandlerSearch(controlSearchResults);
  sortResultsView.addHandlerChange(controlSort);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
