let conversionRates;

function populateCurrencyDropdowns() {
  let fromCurrencyDropdown = document.getElementById("from-currency");
  let toCurrencyDropdown = document.getElementById("to-currency");

  for (let currency in conversionRates) {
    let option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromCurrencyDropdown.add(option);

    option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toCurrencyDropdown.add(option);
  }

  // Set the "Convert To" dropdown to INR by default
  let defaultCurrency = "INR";
  toCurrencyDropdown.value = defaultCurrency;
}

function convertCurrency() {
  let amountInput = document.getElementById("amount");
  let amount = parseFloat(amountInput.value);

  if (isNaN(amount)) {
    // alert("Please enter a valid amount.");
    // return;
    amount = 1.0;
  }

  let fromCurrencyDropdown = document.getElementById("from-currency");
  let fromCurrency = fromCurrencyDropdown.value;

  let toCurrencyDropdown = document.getElementById("to-currency");
  let toCurrency = toCurrencyDropdown.value;

  let fromRate = conversionRates[fromCurrency];
  let toRate = conversionRates[toCurrency];

  let convertedAmount = (amount / fromRate) * toRate;

  let result = document.getElementById("result");
  result.innerHTML = 'Converted Amount: <span style="color: #1E88E5; font-size: 1.5rem;">' + convertedAmount.toFixed(2) + ' ' + '</span>' + toCurrency;
}

fetch("https://api.exchangerate-api.com/v4/latest/USD")
  .then(response => response.json())
  .then(data => {
    conversionRates = data.rates;
    populateCurrencyDropdowns();
  })
  .catch(error => {
    console.log(error);
    alert("An error occurred. Please try again later.");
  });