import { addNumbers } from "@devon-church/gherkin-relish-browser";

export const addTwoNumbers = (value1: number, value2: number) =>
  addNumbers([value1, value2]);

export const addTwoStrings = (value1: string, value2: string) =>
  `${value1}${value2}`;
