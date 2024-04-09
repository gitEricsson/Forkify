import View from './View.js';
import previewView from './previewView.js';

class PreviewUpdateDaysView extends View {
  _parentElement = '';
  _weekIsHidden = '';
  _errorMessage = `No bookmarks yet. Find a nice recipe and bookmark it :)`;
  _message = '';

  setParentElement(element) {
    this._parentElement = element;
  }

  weekIsHidden(bool) {
    this._weekIsHidden = bool;
  }

  _generateMarkup() {
    const newElement = document.createDocumentFragment();

    newElement.appendChild(this._generateMarkupSec('preview__link'));

    const week = this._generateMarkupSec('preview__day-select');

    if (this._weekIsHidden) newElement.appendChild(week);
    else {
      week.classList.remove('hidden');
      newElement.appendChild(week);
    }

    return newElement;
  }

  _generateMarkupSec(elemClass) {
    return document
      .createRange()
      .createContextualFragment(previewView.render(this._data, false))
      .querySelector(`.${elemClass}`);
  }
}

export default new PreviewUpdateDaysView();
