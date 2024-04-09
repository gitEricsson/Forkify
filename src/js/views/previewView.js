import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PreviewView extends View {
  _generateMarkup() {
    const id = window.location.hash.slice(1);

    return `
    <li class="preview" data-id="${this._data.id}">
  <a class="preview__link ${
    this._data.id === id ? 'preview__link--active' : ''
  }"  href="#${this._data.id}">
  <figure class="preview__fig">
  <img src="${this._data.image}" alt=${this._data.title}/>
  </figure>
  <div class="preview__data">
  <h4 class="preview__title">${this._data.title}</h4>
  <p class="preview__publisher">${this._data.publisher}</p>
  <div class="preview__user-generated ${this._data.key ? '' : 'hidden'}">
  <svg>
  <use href="${icons}#icon-user"></use>
  </svg>
  </div>
</div>
  </a>
<div class="preview__day-select hidden">
  <button class="preview__day-select-wrapper week ${
    this._data.planSet.sunday ? 'active' : ''
  }">
    <span class="week" id="sunday">S</span>
 </button>
 <button class="preview__day-select-wrapper week ${
   this._data.planSet.monday ? 'active' : ''
 }">
    <span class="week" id="monday">M</span>
 </button>
 <button class="preview__day-select-wrapper week ${
   this._data.planSet.tuesday ? 'active' : ''
 }">
    <span class="week" id="tuesday">T</span>
 </button>
 <button class="preview__day-select-wrapper week ${
   this._data.planSet.wednesday ? 'active' : ''
 }">
    <span class="week" id="wednesday">W</span> 
 </button>
 <button class="preview__day-select-wrapper week ${
   this._data.planSet.thursday ? 'active' : ''
 }">
    <span class="week" id="thursday">T</span>
 </button>
 <button class="preview__day-select-wrapper week ${
   this._data.planSet.friday ? 'active' : ''
 }">
    <span class="week" id="friday">F</span>
 </button>
 <button class="preview__day-select-wrapper week ${
   this._data.planSet.saturday ? 'active' : ''
 }">
    <span class="week" id="saturday">S</span>
 </button>
</div>
</li>
  `;
  }
}

export default new PreviewView();
