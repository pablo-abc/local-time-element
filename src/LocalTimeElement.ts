import { ReactiveElement } from "@lit/reactive-element";
import { property, query } from "lit/decorators.js";

export class LocalTimeElement extends ReactiveElement {
  @query("time")
  protected timeElement?: HTMLTimeElement;

  @property()
  locales?: string;

  @property()
  weekday?: "long" | "short" | "narrow";

  @property()
  era?: "long" | "short" | "narrow";

  @property()
  year?: "numeric" | "2-digit";

  @property()
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow";

  @property()
  day?: "numeric" | "2-digit";

  @property()
  dayPeriod?: "long" | "short" | "narrow";

  @property()
  hour?: "numeric" | "2-digit";

  @property()
  minute?: "numeric" | "2-digit";

  @property()
  second?: "numeric" | "2-digit";

  @property()
  timeZoneName?:
    | "long"
    | "short"
    | "shortOffset"
    | "longOffset"
    | "shortGeneric"
    | "longGeneric";

  @property()
  dateStyle?: "full" | "long" | "medium" | "short";

  @property()
  timeStyle?: "full" | "long" | "medium" | "short";

  protected update() {
    const date = new Date(this.timeElement?.dateTime || Date.now());
    const options: Intl.DateTimeFormatOptions = {
      weekday: this.weekday,
      era: this.era,
      year: this.year,
      month: this.month,
      day: this.day,
      dayPeriod: this.dayPeriod,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      timeZoneName: this.timeZoneName,
      dateStyle: this.dateStyle,
      timeStyle: this.timeStyle,
    };
    this.timeElement!.textContent = new Intl.DateTimeFormat(
      this.locales || navigator.language,
      options,
    ).format(date);
  }

  protected override createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }
}
