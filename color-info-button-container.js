// <color-info-button-container></color-info-button-container>
export class ColorInfoButtonContainer extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
  }
  connectedCallback() {
    let html = document.importNode(ColorInfoButtonContainerTemplate.content, true);
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(html);
  }
  disconnectedCallback() {

  }
  attributeChangedCallback(attrName, oldVal, newVal) {

  }
}

window.customElements.define('color-info-button-container', ColorInfoButtonContainer);