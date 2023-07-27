import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, curency) {
        this.amount = amount;
        this.curency = curency;
    }

    get amount() {
        return this._amount;
      }
    
    get currency() {
        return this._currency;
    }

    set amount(newAmount) {
        if (typeof newAmount !== 'number') {
            throw new TypeError('amount must be a number');
        }
      
        this._amount = newAmount;
      }
    
    set currency(newCurrency) {
        if (!(newCurrency instanceof Currency)) {
            throw new TypeError('currency must be a Currency');
        }
        this._currency = newCurrency;
    }

    displayFullPrice() {
        return `${this.amount} ${this.currency.name} (${this.currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number') {
          throw new TypeError('amount must be a number');
        }
        if (typeof conversionRate !== 'number') {
          throw new TypeError('conversionRate must be a number');
        }
        return amount * conversionRate;
    }
}