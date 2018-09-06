import {html, LitElement} from '@polymer/lit-element';


class BugShouldUpdate extends LitElement {
  render() {
    return html`<h2>Element ${this.name}</h2>`;
  }
  static get properties() {
    return {
      name: { type: String },
      readyToUpdate: { type: Boolean, attribute: 'ready-to-update' }
    };
  }
  shouldUpdate() {
    console.log(`${this.name} shouldUpdate - ${this.readyToUpdate}`)
    return this.readyToUpdate;
  }
  firstUpdated() {
    console.log(`${this.name} firstUpdated`)
  }
  updated() {
    console.log(`${this.name} updated`)
  }

}

window.customElements.define('bug-should-update', BugShouldUpdate);
