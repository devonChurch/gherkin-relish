import { addNumbers } from "@devon-church/gherkin-relish-browser";

console.log("node utilities!");

module.exports.addTwoNumbers = (value1: number, value2: number) =>
  addNumbers([value1, value2]);

module.exports.addTwoStrings = (value1: string, value2: string) =>
  `${value1}${value2}`;
