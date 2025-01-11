import NumberStringParser from "./NumberStringParser";

function validatePositive(numbers: number[]) {
  const negativeNumbers = numbers.filter(number => number < 0);
  if (negativeNumbers.length > 0) {
    throw Error(`negative numbers are not allowed ${negativeNumbers.join(",")}`);
  }
}

export default function sum(numbersList: string): number {

  const numbers = new NumberStringParser(numbersList).extractNumbers();
  validatePositive(numbers);

  return numbers
    .filter(number => number <= 1000)
    .reduce((a, b) => a + b, 0);
}
