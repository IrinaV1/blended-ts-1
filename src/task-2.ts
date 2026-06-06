interface convertParams {
  amount: number;
  currency: "USD" | "EUR" | "UAH";
}
function convertCurrency({ amount, currency }: convertParams): void {
  console.log(`Converting ${amount} to ${currency}`);
}
convertCurrency({ amount: 100, currency: "UAH" });
// Завдання:

// Типізуйте параметри функції дозволивши властивості currency лише одне із
//  значень "USD", "EUR", "UAH".
// Типізуйте повернення функції.
