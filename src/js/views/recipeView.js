import View from './View.js';

import icons from 'url:../../img/icons.svg';
import shoppingCartAdd from 'url:../../img/shopping-cart-add.svg';
import { Fraction } from 'fractional';

class RecipeView extends View {
  _parentElement = document.querySelector('.recipe__view');
  _errorMessage = `We could not find that recipe. Please try another one!`;
  _message = '';
  _loading = false;

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  // To prevent performance deficiency by overloading one element with multiple event listeners
  _addHandlerMultiPurpose(functionToBeHandled, handler, closeList) {
    this._parentElement.addEventListener(
      'click',
      function (e) {
        return functionToBeHandled(e, handler, closeList);
      }.bind(this)
    );
  }

  addHandlerUpdateServingsWrap(handler) {
    this._addHandlerMultiPurpose(this._addHandlerUpdateServings, handler);
  }

  addHandlerAddIngredientsWrap(handler, closeList) {
    this._addHandlerMultiPurpose(
      this._addHandlerAddIngredients,
      handler,
      closeList
    );
  }

  addHandlerAddBookmarkWrap(handler) {
    this._addHandlerMultiPurpose(this._addHandlerAddBookmark, handler);
  }

  addHandlerNutritionDataWrap(handler) {
    this._addHandlerMultiPurpose(
      this._addHandlerNutritionData.bind(this),
      handler
    );
  }

  _addHandlerUpdateServings(e, handler) {
    const btn = e.target.closest('.btn--update-servings');
    if (!btn) return;
    const { updateTo } = btn.dataset;

    if (+updateTo > 0) handler(+updateTo);
  }

  _addHandlerAddIngredients(e, handler, closeList) {
    // Close Ingredient List
    closeList();

    const btn = e.target.closest('.btn--ingredients');
    if (!btn) return;

    handler();
  }

  _addHandlerAddBookmark(e, handler) {
    const btn = e.target.closest('.btn--bookmark');
    if (!btn) return;
    handler();
  }

  nutrientDataNotLoading() {
    this._loading = false;
  }

  _addHandlerNutritionData(e, handler) {
    const btn = e.target.closest('.nutrition__btn');
    if (!btn) return;

    if (this._loading) return;
    this._loading = true;

    document.querySelector('.arrow-down').classList.add('hide');
    document.querySelector('.spin').classList.remove('hide');

    handler();
  }

  removeButton() {
    this._parentElement.querySelector('.nutrition__btn').classList.add('hide');
  }

  showNutrientData() {
    this._parentElement.querySelector('.nutrition').classList.remove('hide');
  }

  nutrientDataIsHidden() {
    return this._parentElement
      .querySelector('.nutrition')
      .classList.contains('hide');
  }

  _round(value, precision) {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }
  // addHandlerUpdateServings(handler) {
  //   this._parentElement.addEventListener('click', function (e) {
  //     const btn = e.target.closest('.btn--update-servings');
  //     if (!btn) return;
  //     const { updateTo } = btn.dataset;

  //     if (+updateTo > 0) handler(+updateTo);
  //   });
  // }

  // addHandlerAddIngredients(handler, closeList) {
  //   this._parentElement.addEventListener('click', function (e) {
  //     // Close Ingredient List
  //     closeList();

  //     const btn = e.target.closest('.btn--ingredients');
  //     if (!btn) return;

  //     handler();
  //   });
  // }

  // addHandlerAddBookmark(handler) {
  //   this._parentElement.addEventListener('click', function (e) {
  //     const btn = e.target.closest('.btn--bookmark');
  //     if (!btn) return;

  //     handler();
  //   });
  // }

  _generateMarkup() {
    return `<figure class="recipe__fig">
    <img src="${this._data.image}" alt="${
      this._data.title
    }" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icons}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${
        this._data.cookingTime
      }</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icons}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${
        this._data.servings
      }</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to="${
          this._data.servings - 1
        }">
          <svg>
            <use href="${icons}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to="${
          this._data.servings + 1
        }">
          <svg>
            <use href="${icons}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
    <svg>
      <use href="${icons}#icon-user"></use>
    </svg>
  </div>
  <div>
    <button class="btn--round btn--ingredients">
      <svg class="">
        <use href="${shoppingCartAdd}#icon-shopping-add"></use>
      </svg>
    </button>
    </div>
    <div>
    <button class="btn--round btn--bookmark">
      <svg class="">
        <use href="${icons}#icon-bookmark${
      this._data.bookmarked ? '-fill' : ''
    }"></use>
      </svg>
    </button>
    </div>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    ${this._data.ingredients.map(this._generateMarkupIngredient).join('')}
    </ul>
    
    <button class="btn--small nutrition__btn">
      <span>Nutrition detail</span>
      <svg class="arrow-down">
        <use href="${icons}#icon-arrow-down"></use>
      </svg>
      <svg class="spin hide">
        <use href="${icons}#icon-loader"></use>
      </svg>
    </button>

    <div class="nutrition hide">
    <h2 class="heading--2">Recipe Nutrition Detail</h2>
    <ul class="nutrition-data">
      <p>* &asymp;Amount Per Serving</p> 
        <li>
        <h4>Calories</h4>  
        <span>${this._round(this._data.nutrients.calories, 1)}</span>
        </li>

        <li>
        <h4>Total Fat</h4>  
        <span>${this._round(this._data.nutrients.totalFat, 1)} g</span>
        </li>

            <ul>
            <li>
            <span>Saturated Fat</span>  
            <span>${this._round(this._data.nutrients.saturatedFat, 1)} g</span>
            </li>

            <li>
            <span>Other Fats(Trans, Monosaturated, Polyunsaturated)</span> 
            <span>${this._round(
              this._data.nutrients.totalFat - this._data.nutrients.saturatedFat,
              1
            )} g</span>
            </li>
            </ul>

        <li>
        <h4>Cholesterol</h4>  
        <span>${this._round(this._data.nutrients.cholesterol, 1)} mg</span>
        </li>

        <li>
        <h4>Sodium</h4>  
        <span>${this._round(this._data.nutrients.sodium, 1)} mg</span>
        </li>

        <li>
        <h4>Potassium</h4>  
        <span>${this._round(this._data.nutrients.potassium, 1)} mg</span>
        </li>

        <li>
        <h4>Total Carbohydrates</h4>  
        <span>${this._round(
          this._data.nutrients.totalCarbohydrates,
          1
        )} g</span>
        </li>

            <ul>
            <li>
            <span>Dietary Fiber</span> 
            <span>${this._round(this._data.nutrients.dietaryFibers, 1)} g</span>
            </li>

            <li>
            <span>Sugars</span>
            <span>${this._round(this._data.nutrients.sugars, 1)} g</span>
            </li>
            </ul>

       <li>
       <h4>Protein</h4>  
       <span>${this._round(this._data.nutrients.protein, 1)} g</span>
       </li>

       <li>
       <h4>Phosphorus</h4>  
       <span>${this._round(this._data.nutrients.phosphorus, 1)} mg</span>
       </li>      
    </ul>
  </div>
</div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${
        this._data.publisher
      }</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this._data.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
    `;
  }

  _generateMarkupIngredient(ing) {
    return `
        <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${icons}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${
          ing.quantity ? new Fraction(ing.quantity).toString() : ''
        }</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit}</span>
          ${ing.description}
        </div>
      </li>
        `;
  }
}

export default new RecipeView();
