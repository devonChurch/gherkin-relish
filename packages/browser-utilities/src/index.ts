console.log("browser utilities!");

export const addNumbers = (values: number[]) =>
  values.reduce((acc, value) => acc + value, 0);

export const multiplyNumbers = (values: number[]) =>
  values.reduce((acc, value) => acc * value, 1);
