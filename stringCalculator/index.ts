function sum(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  const DELIMITER = ",";

  return numbers
    .split(DELIMITER)
    .map(Number)
    .reduce((a, b) => a + b, 0);
}

export default sum;
