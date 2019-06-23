import { LitElement, html, css } from 'lit-element';

class RecipeItemInfo extends LitElement {
  static get properties() {
    return {
      data: { type: Object },
    };
  }

  static get styles() {
    return css`
:host {
display: flex;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-between;
}
.info__item {
    color: #484e5c;
  }

  .info__item__red,
  .info__item__red .extra {
    color: #ec526f;
  }
  
  .num {
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
  }

  .description {
    display: inline-block;
    font-size: 16px;
  }

  .extra {
    font-size: 12px;
    color: #a1a1a1;
  }
    `;
  }

  constructor() {
    super();
    this.data = {
      readiness: {
        num: '',
        description: '',
        extra: ''
      },
      duration: {
        num: '',
        description: '',
        extra: ''
      },
      need: {
        num: '',
        description: '',
        extra: ''
      }
    };
  }
  render() {
    return html`
      <div class="info__item info__item__red">
            <div class="num">${this.data.readiness.num}</div>
            <div class="description">${this.data.readiness.description}</div>
            <div class="extra">${this.data.readiness.extra}</div>
          </div>
          <div class="info__item">
            <div class="num">${this.data.duration.num}</div>
            <div class="description">${this.data.duration.description}</div>
            <div class="extra">${this.data.duration.extra}</div>
          </div>
          <div class="info__item">
            <div class="num">${this.data.need.num}</div>
            <div class="description">${this.data.need.description}</div>
            <div class="extra">${this.data.need.extra}</div>
          </div>
    `;
  }
}


customElements.define('recipe-item-info', RecipeItemInfo);