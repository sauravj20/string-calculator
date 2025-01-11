export default class NumberStringParser {
  constructor(private input: string) {}

  public extractNumbers() {
    if (this.input === "") {
      return [];
    }
    let numbersOnlyString: string;
    if (this.isCustomerDelimiterPresent()) {
      numbersOnlyString = this.input.split('\n')[1];
    } else {
      numbersOnlyString = this.input;
    }

    return numbersOnlyString.split(this.getDelimiter()).map(Number);
  }

  private isCustomerDelimiterPresent(): boolean {
    return this.input[0] === '/' && this.input[1] === '/';
  }

  private getDelimiter(): RegExp {
    const DEFAULT_DELIMITERS = /[,\n]/;
    if (this.isCustomerDelimiterPresent()) {
      return new RegExp(this.extractCustomDelimiter());
    }
    return DEFAULT_DELIMITERS;
  }

  private extractCustomDelimiter(): string {
    const stringWithoutCustomDelimiterMarker = this.input.substring(2);
    const [delimiterPattern] = stringWithoutCustomDelimiterMarker.split('\n');
    let delimiter: string;
    if (this.isMultiCharDelimiter(delimiterPattern)) {
      delimiter = delimiterPattern.substring(1, delimiterPattern.length - 1);
    } else {
      delimiter = delimiterPattern
    }
    return delimiter.split('').map(char => `\\${char}`).join('');
  }

  private isMultiCharDelimiter(delimiterPattern: string) {
    return delimiterPattern[0] === '[' && delimiterPattern[delimiterPattern.length - 1] === ']';
  }
}