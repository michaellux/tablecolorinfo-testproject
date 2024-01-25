// <color-info-window></color-info-window>
export class ColorInfoWindow extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    let html = document.importNode(ColorInfoWindowTemplate.content, true);
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(html);
    this.closeColorInfoEventTarget.addEventListener('closeButtonClicked', this.hide.bind(this));
  }
  disconnectedCallback() {

  }
  attributeChangedCallback(attrName, oldVal, newVal) {

  }

  hide() {
    console.log("hide");
    this.style.display = 'none';
  }
}