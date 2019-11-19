var assert = require("assert");
// var randomWords = require("../dist/index.js");
// import words from "../dist/index";
const { words } = require("../dist/index");

describe("random-words", function() {
  it("should return one word when called with no arguments", function() {
    const word = words();
    console.warn("----");
    console.warn(word);
    assert.ok(typeof word === "string", "word is a string");
    assert.ok(word.length, "word is not empty");
    assert.ok(word.indexOf(" ") === -1, "word does not contain spaces");
  });
});
