function getNumbers(numbersList: string) {
  let numbersOnlyString: string;
  if (hasCustomDelimiter(numbersList)) {
    numbersOnlyString = numbersList.split('\n')[1];
  } else {
    numbersOnlyString = numbersList;
  }

  return numbersOnlyString.split(getDelimiter(numbersList)).map(Number);
}

function getDelimiter(numbersList: string): RegExp {
  const DEFAULT_DELIMITERS = /[,\n]/;
  if (hasCustomDelimiter(numbersList)) {
    return new RegExp(extractCustomDelimiter(numbersList));
  }
  return DEFAULT_DELIMITERS;
}

function extractCustomDelimiter(numbersList: string): string {
  const stringWithoutCustomDelimiterMarker = numbersList.substring(2);
  const [delimiterPattern] = stringWithoutCustomDelimiterMarker.split('\n');
  let delimiter: string;
  if (delimiterPattern[0] === '[' && delimiterPattern[delimiterPattern.length - 1] === ']') {
    delimiter = delimiterPattern.substring(1, delimiterPattern.length - 1);
  } else {
    delimiter = delimiterPattern
  }
  return delimiter.split('').map(char => `\\${char}`).join('');
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
