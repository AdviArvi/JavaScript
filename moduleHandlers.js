export async function handleButtonClick(event) {
    const { localCurrency, default: currency } = await import('./moduleCurrencies.js');
    console.log(localCurrency, currency);
  }