var assert = require("assert");
// var randomWords = require("../dist/index.js");
// import words from "../dist/index";
const { words } = require("../dist/index");

describe("random-words", function () {
  it("should return one word when called with no arguments", function () {
    const word = words();
    console.log("-1 word-");
    console.log(word);
    assert.ok(typeof word === "string", "word is a string");
    assert.ok(word.length, "word is not empty");
    assert.ok(word.indexOf(" ") === -1, "word does not contain spaces");
  });

  it("should return 2 words in camelCase", function () {
    const word = words(2, "camelCase");
    console.log("-2 word camelCase-");
    console.log(word);
    assert.ok(typeof word === "string", "word is a string");
    assert.ok(word.length, "word is not empty");
    assert.ok(word.indexOf(" ") === -1, "word does not contain spaces");
  });

  it("should return 2 words in kebabCase", function () {
    const word = words(2, "kebabCase");
    console.log("-2 word kebab-case-");
    console.log(word);
    assert.ok(typeof word === "string", "word is a string");
    assert.ok(word.length, "word is not empty");
    assert.ok(word.indexOf(" ") === -1, "word does not contain spaces");
  });

  it("should return 2 words in snake_case", function () {
    const word = words(2, "snakeCase");
    console.log("-2 word snake_case-");
    console.log(word);
    assert.ok(typeof word === "string", "word is a string");
    assert.ok(word.length, "word is not empty");
    assert.ok(word.indexOf(" ") === -1, "word does not contain spaces");
  });

  it("should return 5 words in camelCase", function () {
    const word = words(5, "camelCase");
    console.log("-5 word camelCase-");
    console.log(word);
    assert.ok(typeof word === "string", "word is a string");
    assert.ok(word.length, "word is not empty");
    assert.ok(word.indexOf(" ") === -1, "word does not contain spaces");
  });
});
