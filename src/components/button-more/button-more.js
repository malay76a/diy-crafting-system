import { LitElement, html, css } from 'lit-element';

class ButtonMore extends LitElement {
  static get styles() {
    return css`
      :host {
        border-radius: 25px;
        border: solid 1px #484e5c;
        background-color: #ffffff;
        padding: 12px 24px;
        font-size: 14px;
        color: #484e5c;
        cursor: pointer;
        outline: none;
      }
    `;
  }
  render() {
    return html`
      <slot></slot>
    `;
  }
}
customElements.define('button-more', ButtonMore);
