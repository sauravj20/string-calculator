function separateDelimiterAndNumbers(numbersList: string) {
  if (numbersList[0] === '/' && numbersList[1] === '/') {
    return {
      DELIMITER: new RegExp(numbersList[2]),
      numbers: numbersList.substring(4)
    };
  }
  return {DELIMITER: /[,\n]/, numbers: numbersList};
}

export default function sum(numbersList: string): number {
  if (numbersList === "") {
    return 0;
  }

  const {DELIMITER, numbers} = separateDelimiterAndNumbers(numbersList);

  return numbers
    .split(DELIMITER)
    .map(Number)
    .reduce((a, b) => a + b, 0);
}
