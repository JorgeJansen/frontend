import { CurrencyPipe } from "@angular/common";

export class Utils {

  public static maskCurrency(value) {
    const currencyPipe: CurrencyPipe = new CurrencyPipe('pt-BR');
    return currencyPipe.transform(value, 'BRL')
  }

  public static moneyTofloat(value: string) {
    if (typeof value == 'string') {
      value = value.replace(/[^0-9\,-]+/g, '').replace(',', '.')
    }
    return parseFloat(value)
  }
}
