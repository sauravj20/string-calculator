function sum(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  let DELIMITER = /[,\n]/;
  if (numbers[0] === '/' && numbers[1] === '/') {
    DELIMITER = new RegExp(numbers[2]);
    numbers = numbers.substring(4)
  }

  return numbers
    .split(DELIMITER)
    .map(Number)
    .reduce((a, b) => a + b, 0);
}

export default sum;
