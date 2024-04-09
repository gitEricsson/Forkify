import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.noOfResultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
      ${new Array(numPages)
        .fill(0)
        .map((_, i) => {
          return `      
        <button data-goto="${
          i + 1
        }" class="btn--inline pagination__btn--prev  ${
            i + 1 === curPage ? 'pagination__link--active' : ''
          }">
        <span>${i + 1}</span>
      </button>`;
        })
        .join('')}


        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return `
      <button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
    </button>
    
    
    ${new Array(numPages)
      .fill(0)
      .map((_, i) => {
        return `      
      <button data-goto="${i + 1}" class="btn--inline pagination__btn--prev ${
          i + 1 === curPage ? 'pagination__link--active' : ''
        }">
      <span>${i + 1}</span>
    </button>`;
      })
      .join('')}`;
    }

    // Other page
    if (curPage < numPages) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
      </button>

    ${new Array(numPages)
      .fill(0)
      .map((_, i) => {
        return `      
      <button data-goto="${i + 1}" class="btn--inline pagination__btn--prev  ${
          i + 1 === curPage ? 'pagination__link--active' : ''
        }">
      <span>${i + 1}</span>
    </button>`;
      })
      .join('')}
    
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    }

    // Page 1, and there are no other pages
    return '';
  }
}

export default new PaginationView();
