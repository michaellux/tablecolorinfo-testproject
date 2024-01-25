// <save-all-color-info-button></save-all-color-info-button>
export class SaveAllColorInfoButton extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
  }
  connectedCallback() {
    let html = document.importNode(SaveAllColorInfoButtonTemplate.content, true);
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(html);
  }
  disconnectedCallback() {
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
  }
}

window.customElements.define('save-all-color-info-button', SaveAllColorInfoButton);