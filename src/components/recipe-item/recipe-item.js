import { LitElement, html } from 'lit-element';
import { common } from './recipe-item.style';

import '../button-more/button-more';
import '../recipe-item-info/recipe-item-info';

class RecipeItem extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      img: { type: String },
      multiple: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.info = {
      readiness: {
        num: '70%',
        description: '',
        extra: 'готовность',
      },
      duration: {
        num: '3',
        description: 'недели',
        extra: 'длительность',
      },
      need: {
        num: '14',
        description: 'товаров',
        extra: 'необходимы',
      },
    };
  }

  static get styles() {
    return common;
  }

  render() {
    return html`
      <article>
        <header style="background-image: url(https://picsum.photos/330/300)">
          <div class="header-line">
            <h2>
              Кухня
            </h2>
            <div class="more">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
          <div class="header-line">
            <div class="header-text">Общая сумма проекта:</div>
            <div class="sum">100 217 ₽</div>
          </div>
        </header>
        <recipe-item-info .data=${this.info}></recipe-item-info>
        <footer>
          <button-more>Подробнее</button-more>
        </footer>
      </article>
    `;
  }
}

customElements.define('recipe-item', RecipeItem);
