# Friendly Word Slugs 🐌

Installation: `npm i friendly-word-slug`


Usage: 
`randomWords()`

- Returns a random word



`randomWords(number, format)`

> NOTE: Acceptable formats include "camelCase" "snakeCase" and "kebabCase"

- returns `number` random words formatted using the `format` scheme 
```
number: how many words to return

format: what format to put them in
```



Example Usage :
```randomWords()
//goose

randomWords(3, "camelCase")
//gooseAppleCar
```
