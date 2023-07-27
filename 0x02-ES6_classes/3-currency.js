export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(newJS) {
    this._code = newJS;
  }

  set name(newName) {
    this._name = newName;
  }

  /**
   * Generates a string repressation of required currency
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
