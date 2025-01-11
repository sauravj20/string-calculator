function getNumbers(numbersList: string) {
  let numbersOnlyString: string;
  if (hasCustomDelimiter(numbersList)) {
    numbersOnlyString = numbersList.substring(4);
  } else {
    numbersOnlyString = numbersList;
  }

  return numbersOnlyString.split(getDelimiter(numbersList)).map(Number);
}

function getDelimiter(numbersList: string): RegExp {
  const DEFAULT_DELIMITERS = /[,\n]/;
  if (hasCustomDelimiter(numbersList)) {
    return new RegExp(numbersList[2]);
  }
  return DEFAULT_DELIMITERS;
}

function hasCustomDelimiter(numbersList: string): boolean {
  return numbersList[0] === '/' && numbersList[1] === '/'
}

function validatePositive(numbers: number[]) {
  const negativeNumbers = numbers.filter(number => number < 0);
  if (negativeNumbers.length > 0) {
    throw Error(`negative numbers are not allowed ${negativeNumbers.join(",")}`);
  }
}

export default function sum(numbersList: string): number {
  if (numbersList === "") {
    return 0;
  }
  const numbers = getNumbers(numbersList);
  validatePositive(numbers);

  return numbers
    .filter(number => number <= 1000)
    .reduce((a, b) => a + b, 0);
}
