# local-time-element

An element that displays that enhances the `<time>` element in order to display a localised time.

## Installation

```shell-session
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

```html
<script type="module">
    import 'local-time-element/dist/local-time-element.js';
</script>
<local-time>
    <time datetime="2021-01-01T00:00Z">Jan 1, 2021</time>
</local-time>
```

The value within `<time>` will only be overwritten.
