import wordList from "./words";

export function words() {
  function generateRandomWord() {
    return wordList[randInt(wordList.length)];
  }

  function randInt(lessThan: number) {
    return Math.floor(Math.random() * lessThan);
  }

  return generateRandomWord();
}
