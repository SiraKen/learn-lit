import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("counter-element")
export class CounterElement extends LitElement {
  @state()
  counter: number = 0;

  override render() {
    return html`
      <p>Counter: ${this.counter}</p>
      <button @click="${this.increment}">Count up</button>
    `;
  }

  increment() {
    this.counter++;
  }
}
