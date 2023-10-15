// Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.

// Celsius to Fahrenheit
// Formula	
// (0°C × 9/5) + 32 = 32°F

function celsiusToFahrenheit(celsius) {
    let formula = (celsius * (9 / 5) + 32);
    console.log("Celsius To Fahrenheit",formula);
}

// Fahrenheit To Centigrade
// Formula
// (0°F − 32) × 5/9 = -17.78°C

function fahrenheitToCentigrade(celsius) {
    let formula = (celsius - 32) * 5 / 9;
    console.log("Fahrenheit To Centigrade",formula)
}

fahrenheitToCentigrade(2);
celsiusToFahrenheit(2)
