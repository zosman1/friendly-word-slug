import { camelCase, kebabCase, snakeCase } from "lodash";

import wordList from "./words";

type InputType = "camelCase" | "kebabCase" | "snakeCase";

export function words(n?: number, type?: InputType) {
  function generateRandomWord() {
    return wordList[randInt(wordList.length)];
  }

  function randInt(lessThan: number) {
    return Math.floor(Math.random() * lessThan);
  }

  if (typeof n === "number" && typeof type === "string") {
    let slug = "";
    for (let i = 0; i < n; i++) {
      slug = slug + " " + generateRandomWord();
    }

    switch (type) {
      case "camelCase":
        return camelCase(slug);
      case "kebabCase":
        return kebabCase(slug);
      case "snakeCase":
        return snakeCase(slug);
      default:
        throw new Error(`Incompatible type provided.
        Acceptable Types: "camelCase" | "kebabCase" | "snakeCase"`);
    }
  }

  if (n === undefined) {
    //base functionality
    return generateRandomWord();
  }

  throw new Error("Incorrect Function Usage");
}
