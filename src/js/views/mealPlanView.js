import View from './View.js';
import icons from 'url:../../img/icons.svg';

class MealPlanView extends View {
  _parentElement = '';
  _errorMessage = `All meals have been cleared for this day`;
  _message = '';

  _window = document.querySelector('.meal-plan');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--meal-plan');
  _mealPlanWindow = document.querySelector('.meal-plan-window');
  //   _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    // this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.closeWindow.bind(this));
    window.addEventListener('hashchange', this.closeWindow.bind(this));
  }

  addHandlerRemoveMeal(handler) {
    this._mealPlanWindow.addEventListener(
      'click',
      function (e) {
        if (!e.target.classList.contains('btn--delete-meal')) return;

        const day = e.target.closest('ul').classList[0].split('-')[0];
        const id = e.target.closest('.preview-meal-plan').dataset.id;

        handler(null, day, id, true);
      }.bind(this)
    );
  }

  setParentElement(day) {
    this._parentElement = document.querySelector(`.${day}-list`);
  }

  _generateMarkup() {
    return this._data.map(this._generateMarkupIngredients).join('');
  }

  _generateMarkupIngredients(meal) {
    return `
    <li class="preview-meal-plan" data-id="${meal.id}">
    <a
      class="preview-meal-plan__link"
      href="#${meal.id}"
    >
      <span class="preview-meal-plan__title">${meal.title}</span
      >
    </a>

    <div class="btn--delete-meal">
      <svg class="btn--delete-meal">
        <use
          class="btn--delete-meal"
          href="${icons}#icon-delete"
        ></use>
      </svg>
    </div>
  </li>
    `;
  }
}

export default new MealPlanView();
