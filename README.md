# Currency Converter

[![Currency Converter](https://raw.githubusercontent.com/harsh98trivedi/Currency-Converter/master/meta.jpg)](https://harsh98trivedi.github.io/Currency-Converter)

The Currency Converter is a web application that allows users to convert amounts from one currency to another using real-time exchange rates. This project provides a simple and user-friendly interface for performing currency conversions.

## Features

- Real-time exchange rates: The Currency Converter fetches the latest exchange rates from an API to ensure accurate and up-to-date currency conversions.

- Currency selection: Users can select the currencies they want to convert from and to using dropdown menus. The available currencies are dynamically populated based on the exchange rate data.

- Conversion results: After entering the amount in dollars and selecting the desired currencies, the application displays the converted amount, along with the currency symbol and country flag, providing a clear visual representation of the conversion.

- Default currency: The "Convert To" dropdown is pre-set to Indian Rupees (INR) by default, allowing users to quickly convert amounts to INR if desired.

## Technologies Used

- JavaScript: The core logic of the Currency Converter is implemented using JavaScript to handle currency conversions, fetch exchange rates, and manipulate the DOM.

- HTML: The structure and layout of the web page are defined using HTML, including input fields, dropdown menus, and result display areas.

- CSS: The Currency Converter is styled using CSS to create an attractive and user-friendly interface, ensuring a visually pleasing experience.

## Getting Started

To run the Currency Converter locally, follow these steps:

1. Clone the repository: `git clone https://github.com/harsh98trivedi/currency-converter.git`
2. Navigate to the project directory: `cd currency-converter`
3. Open the `index.html` file in your preferred web browser.

## API Usage

The Currency Converter utilizes an external API to fetch the latest exchange rates. The API used in this project is [Exchangerate API](https://www.exchangerate-api.com/), which provides free access to real-time exchange rate data.