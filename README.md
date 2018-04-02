# cyrillic-input

Regular expressions for autocomplete, to match user input against.

```js
new CyrillicInput().regexify("Тест");
// -> /^(?:т|n|t)(?:е|є|t|e|ye|a|eu|ae)(?:c|с|s|z|ss|sc|x|es)?(?:т|n|t)/i
```

## License

MIT
