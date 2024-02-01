# local-time-element

An element that enhances the `<time>` element in order to display a localised time.

## Installation

```sh
$ pnpm add local-time-element

# OR

$ npm add local-time-element
```

## Usage

This package uses `Intl.DateTimeFormat` to format the date in the locale of the user. It accepts the following
[options from it](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters) as properties:

- locales
- weekday
- era
- year
- month
- day
- dayPeriod
- hour
- minute
- second
- timeZoneName
- dateStyle
- timeStyle

By default every value is `undefined`.

These properties can also be set as attributes in lowercase. E.g. `timeZoneName` would be `timezonename`.

This element requires a `<time>` element as a direct child of it. It *must* have at least its `datetime` attribute set to an ISO 8601 date. The `<time>` element's content is optional, and _may_ be used as a fallback in case JavaScript is not enabled.

```html
<script type="module">
    import 'local-time-element/dist/local-time-element.js';
</script>
<local-time datestyle="full" timestyle="full">
    <time datetime="2021-01-01T00:00Z">Jan 1, 2021</time>
</local-time>
```

In my time zone this would display:
`Friday, January 1, 2021 at 1:00:00 AM Central European Standard Time`

## Custom tag name

The class can be imported from the root of the package. The root does _not_ define the
custom element, so it can be used to register a custom tag-name.

```typescript
import { LocalTimeElement } from 'local-time-element';

customElements.define('my-local-time', LocalTimeElement);
```
