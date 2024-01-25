export class CloseColorInfoWindowEventTarget extends EventTarget {
  constructor() {
    super();
    this.addEventListener('callEvent', this.callEvent.bind(this));
  }
  callEvent() {
    console.log('callEvent');
    this.dispatchEvent(new CustomEvent('closeButtonClicked'));
  }
}