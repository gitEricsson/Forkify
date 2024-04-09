import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  // _daySelect = document.querySelector('.preview__day-select');
  _overlay = document.querySelector('.overlay');
  _menuButton = document.querySelector('.menu__btn');
  _btnClose = document.querySelector('.btn--close-search-results');
  _window = document.querySelector('.search-results');

  _errorMessage = `No recipes found for your query! Please try again :)`;
  _message = '';

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  _toggleDaySelect(e) {
    document.querySelectorAll('.preview').forEach(ing => {
      if (ing === e.target.closest('.preview')) {
        ing.querySelector('.preview__day-select').classList.toggle('hidden');
      }
    });
  }

  previewToUpdate(id) {
    const elem = [...this._parentElement.querySelectorAll('.preview')].find(
      meal => meal.dataset.id === id
    );

    const weekIsHidden = elem
      ?.querySelector('.preview__day-select')
      .classList.contains('hidden');

    return {
      elem: elem,
      weekIsHidden: weekIsHidden,
    };
  }

  addHandlerDaySelect(e, handler) {
    const parent = e.target.closest('.preview');
    const id = parent.dataset.id;
    const title = parent.querySelector('.preview__title').textContent;
    const wrapper = e.target.closest('.preview__day-select-wrapper');
    const day = wrapper.firstElementChild.id;

    wrapper.classList.toggle('active');

    handler({ id: id, title: title }, day, null);
  }

  addHandlerWeek(handler) {
    this._parentElement.addEventListener(
      'click',
      function (e) {
        if (e.target.classList.contains('week')) {
          this.addHandlerDaySelect(e, handler);
          return;
        }

        this._toggleDaySelect(e);
      }.bind(this)
    );
  }

  _addHandlerShowWindow() {
    // Function to display or hide mobile menu
    this._menuButton.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.closeWindow.bind(this));
    this._overlay.addEventListener('click', this.closeWindow.bind(this));
  }

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
