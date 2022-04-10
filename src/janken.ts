import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

const actions = [
  { name: "グー", value: "rock", emoji: "✊" },
  { name: "チョキ", value: "scissors", emoji: "✌️" },
  { name: "パー", value: "paper", emoji: "✋" },
];

@customElement("janken-element")
export class JankenElement extends LitElement {
  @state()
  private result = { emoji: "", status: "" };

  override render() {
    return html`
      <div>
        <div>
          <p>じゃんけん...</p>
        </div>
        <!-- 選択肢 -->
        <div>
          ${actions.map((action) => {
            return html`
              <button @click=${() => this.onClick(action.value)}>
                ${action.emoji} ${action.name}
              </button>
            `;
          })}
        </div>
        <!-- 相手の手 -->
        <div>
          <p>
            相手の手：
            <span>${this.result.emoji}</span>
            <span>${this.result.status}</span>
          </p>
        </div>
      </div>
    `;
  }

  onClick(action: string) {
    const random = Math.floor(Math.random() * 3);
    const result = actions[random];
    this.result = {
      emoji: result.emoji,
      status: this.judge(action, result.value),
    };
  }

  judge(action: string, result: string) {
    if (action === result) {
      return "あいこ";
    } else if (action === "rock" && result === "scissors") {
      return "あなたの勝ち！";
    } else if (action === "scissors" && result === "paper") {
      return "あなたの勝ち！";
    } else if (action === "paper" && result === "rock") {
      return "あなたの勝ち！";
    } else {
      return "あなたの負け...";
    }
  }
}
