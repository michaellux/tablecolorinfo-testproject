
export class CloseColorInfoWindowButton extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', () => {
      console.log('click');
      this.closeColorInfoEventTarget.dispatchEvent(new CustomEvent('callEvent', { bubbles: true }));
    })
  }
  connectedCallback() {
    let html = document.importNode(CloseColorInfoWindowButtonTemplate.content, true);
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(html);
  }
  disconnectedCallback() {
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
  }
}

