import View from './View.js';
import recipeView from './recipeView.js';
import resultsView from './resultsView.js';

class NutritionDataView extends View {
  _parentElement = document.querySelector('.recipe__view');
  _nutrientDataIsHidden = '';
  _errorMessage = `No bookmarks yet. Find a nice recipe and bookmark it :)`;
  _message = '';

  setParentElement(element) {
    this._parentElement = element;
  }

  nutrientDataIsHidden(bool) {
    this._nutrientDataIsHidden = bool;
  }

  _generateMarkup() {
    const nutritionData = document
      .createRange()
      .createContextualFragment(recipeView.render(this._data, false));

    if (!this._nutrientDataIsHidden) {
      nutritionData.querySelector('.nutrition__btn').classList.add('hide');
      nutritionData.querySelector(`.nutrition`).classList.remove('hide');
    }

    return nutritionData;
  }
}

export default new NutritionDataView();
