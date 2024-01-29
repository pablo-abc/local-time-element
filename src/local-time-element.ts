import { LocalTimeElement } from "./LocalTimeElement";

if (!customElements.get("local-time")) {
  customElements.define("local-time", LocalTimeElement);
}

declare global {
  interface HTMLElementTagNameMap {
    "local-time": LocalTimeElement;
  }
}
