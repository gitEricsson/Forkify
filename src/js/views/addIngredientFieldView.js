import View from './View.js';
import { ADD_FIELD_MAX } from '../config.js';

class AddIngredientFieldView extends View {
  _parentElement = document.querySelector('.add-Field__container');
  _addFieldIcon = document.querySelector('.add-Field__icon');
  _ingredients = document.querySelectorAll('.ingredient');
  _addFieldCount = this._ingredients.length;

  constructor() {
    super();
    this._addHandlerClick();
  }

  _addHandlerClick() {
    this._addFieldIcon.addEventListener(
      'click',
      this._addFieldLimit.bind(this)
    );
  }

  _hideAddIcon() {
    this._parentElement.classList.add('hide');
  }

  _addFieldLimit() {
    this._addFieldCount++;
    const markup = this._generateMarkup();

    this._parentElement.insertAdjacentHTML('beforebegin', markup);

    if (this._addFieldCount === ADD_FIELD_MAX) {
      this._hideAddIcon();
      return;
    }
  }

  _generateMarkup() {
    return `
    <label class="ingredient" >Ingredient ${this._addFieldCount}</label>
    <input 
     type="number" 
     class="ingredient-${this._addFieldCount}" 
     placeholder="Quantity" 
    />
    <input 
     type="text" 
     class="ingredient-${this._addFieldCount}" 
     placeholder="Unit" 
    />
    <input
      type="text"
      class="ingredient-${this._addFieldCount}"
      placeholder="Description"
    />`;
  }
}

export default new AddIngredientFieldView();
