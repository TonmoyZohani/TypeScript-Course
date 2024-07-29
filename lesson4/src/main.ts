// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// Literal types
let myName: "Dave";

let userName: "Dave" | "John" | "Amy";
userName = "Amy";

// Functions
const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

const messagePrint = (message: any): void => {
  console.log(message);
};

const subTract = function (num1: number, num2: number): number {
  return num1 - num2;
};

// created function type
// type mathFunction = (num1: number, num2: number) => number;

// alternative
interface mathFunction {
  (num1: number, num2: number): number;
}

const multiply: mathFunction = (num1, num2) => {
  return num1 * num2;
};

// optional parameters
const addAll = (num1: number, num2: number, num3?: number): number => {
  if (num3 !== undefined) {
    return num1 + num2 + num3;
  }

  return num1 + num2;
};

const sumAll = (num1: number, num2: number, num3: number): number => {
  return num1 + num2 + num3;
};

// rest parameters
const calculateSum = (...nums: number[]): number => {
  return nums.reduce((sum, num) => sum + num, 0);
};

// console.log(add(5, 6));
// messagePrint("This is TypeScript Function");
// console.log(subTract(11, 6));
// console.log(multiply(3, 8));
// console.log(sumAll(7, 9, 8));
// console.log(addAll(5, 9));
// console.log(calculateSum(1, 2, 3, 4));
