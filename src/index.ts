import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./counter";
import "./janken";

@customElement("my-element")
class MyElement extends LitElement {
  @property({ type: String })
  name: string = "";

  static override styles = css`
    :host {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
  `;

  override render() {
    return html`
      <h1>Hello, ${this.name}</h1>
      <!-- tips: jsx的な閉じタグ<element />はなんか動かない -->
      <counter-element></counter-element>
      <janken-element></janken-element>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
