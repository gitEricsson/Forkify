import View from './View.js';

class SortResultsView extends View {
  _parentElement = document.querySelector('.sort__icon__container');
  _sortIcon = document.querySelector('.sort__icon');
  _sortForm = document.querySelector('.sort__form');
  _formSelect = document.querySelector('.form__input--sort');

  constructor() {
    super();
    this._addHandlerShowFilter();
  }

  _toggleForm() {
    this._sortForm.classList.toggle('hidden');
  }

  renderIcon() {
    this._sortIcon.classList.remove('hidden');
    this._formSelect.value = 'default';
  }

  _addHandlerShowFilter() {
    this._sortIcon.addEventListener('click', this._toggleForm.bind(this));
  }

  addHandlerChange(handler) {
    this._sortForm.addEventListener(
      'change',
      function (e) {
        e.preventDefault();
        const key = this._formSelect.value;
        this._toggleForm();
        handler(key);
      }.bind(this)
    );
  }
}

export default new SortResultsView();
