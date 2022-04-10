import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./other";

@customElement("my-element")
class MyElement extends LitElement {
  @property({ type: String })
  name: string = "";

  @state()
  counter: number = 0;

  static override styles = css`
    :host {
      display: block;
      color: gray;
    }
  `;

  override render() {
    return html`
      <ul>
        <li>${this.name}</li>
        <li>Counter: ${this.counter}</li>
        <li><button @click="${this.increment}">Count up</button></li>
      </ul>
    `;
  }

  increment() {
    this.counter++;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
