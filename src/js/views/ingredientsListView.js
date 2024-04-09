import View from './View.js';

import icons from 'url:../../img/icons.svg';
import { Fraction } from 'fractional';

class IngredientsListView extends View {
  _parentElement = document.querySelector('.ingredients__list');
  _errorMessage =
    "No saved ingredient yet. Find a nice recipe and cart it's ingredients :)";
  _message = '';

  _ingredientsContainerList = document.querySelector('.recipe');
  _ingredientsList = document.querySelector('.ingredients');
  _btnOpen = document.querySelector('.nav__btn--ingredients');
  _btnClose = document.querySelector('.close-list__icon');
  _mainIngredientList = document.querySelector('.ingredients__list');
  _btnDeleteAll = document.querySelector('.delete__all--icon');

  constructor() {
    super();
    this._addHandlerIngredients();
  }

  closeList() {
    this._ingredientsContainerList.classList.add('overflow');
    this._ingredientsList.setAttribute('id', 'slide-out');
    this._ingredientsList.classList.add('hidden');
  }

  _toggleList() {
    const isOpen = this._ingredientsList.id === 'slide-in';

    this._ingredientsContainerList.classList.toggle('overflow');
    this._ingredientsList.setAttribute('id', isOpen ? 'slide-out' : 'slide-in');
    this._ingredientsList.classList.toggle('hidden');
  }

  _addHandlerIngredients() {
    this._btnOpen.addEventListener('click', this._toggleList.bind(this));
    this._btnClose.addEventListener('click', this._toggleList.bind(this));
  }

  addHandlerRemoveIngredients(handler) {
    this._mainIngredientList.addEventListener(
      'click',
      function (e) {
        document.querySelectorAll('.shopping__item').forEach(ing => {
          ing.querySelectorAll('.remove__ingredient').forEach(ele => {
            if (ele === e.target) handler(ing, true);
          });
        });
      }.bind(this)
    );
  }

  addHandlerRemoveAllIngredients(handler) {
    this._btnDeleteAll.addEventListener('click', handler);
  }

  _generateMarkup() {
    return this._data.map(this._generateMarkupIngredients).join('');
  }

  _generateMarkupIngredients(ing) {
    return `
    <li class="shopping__item" data-id="${ing.id}">
    <div 
    <p class="ingredients__description--container">
    <svg>
    <use href="${icons}#icon-dot"></use>
</svg>
      <p class="ingredients__description">
                ${ing.quantity ? new Fraction(ing.quantity).toString() : ''} ${
      ing.unit
    } ${ing.description}
     </p>
     </div>
       <div>
          <svg class="remove__ingredient">
              <use class="remove__ingredient" href="${icons}#icon-minus-circle"></use>
          </svg>
      </div>
    </li>
    `;
  }
}

export default new IngredientsListView();
