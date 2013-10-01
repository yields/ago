
# ago

  `Date(now - 1e3) => "a second ago"`

## Installation

  Install with [component(1)](http://component.io):

    $ component install yields/ago

## API

### ago(date)

  Homanize the given `date`.

## Examples

```js
assert('just now' == ago(new Date));
assert('a second ago' == ago(new Date - 1e3));
assert('10 seconds ago' == ago(new Date - 1e3 * 10));
assert('23 seconds ago' == ago(new Date - 1e3 * 23));
assert('a minute ago' == ago(new Date - 1e3 * 60));
assert('10 minutes ago' == ago(new Date - 6e4 * 10));
assert('23 minutes ago' == ago(new Date - 6e4 * 23));
assert('an hour ago' == ago(new Date - 6e4 * 60));
assert('10 hours ago' == ago(new Date - 3.6e+6 * 10));
assert('23 hours ago' == ago(new Date - 3.6e+6 * 23));
assert('a day ago' == ago(new Date - 3.6e+6 * 24));
assert('10 days ago' == ago(new Date - 8.64e+7 * 10));
assert('23 days ago' == ago(new Date - 8.64e+7 * 23));
assert('a month ago' == ago(new Date - 8.64e+7 * 31));
assert('10 months ago' == ago(new Date - 2.63e+9 * 10));
assert('a year ago' == ago(new Date - 2.63e+9 * 12));
assert('10 years ago' == ago(new Date - 3.156e+10 * 10));
```

## License

  MIT
