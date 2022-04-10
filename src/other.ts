import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-other-element")
export class MyOtherElement extends LitElement {
  override render() {
    return html` <div>Hello from MyOtherElement!</div> `;
  }
}
