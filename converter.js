// let sum;
// let num;
// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    celsius = parseFloat(celsius);
    let sum = ((celsius-32)/1.8).toFixed(0);
    return sum;
    
}
  
// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    fahrenheit = parseFloat(fahrenheit);
    let num = ((fahrenheit*1.8)+32).toFixed(0);
    return num;



}
  
// Prompt the user for input
let temperature = parseFloat(prompt("Enter the temperature:"));
let conversionType = prompt("Choose the conversion type: (Celsius to Fahrenheit or Fahrenheit to Celsius)");
  
if (conversionType.toLowerCase() === "celsius to fahrenheit") {
    alert(celsiusToFahrenheit(temperature) + " " + "F");



} else if (conversionType.toLowerCase() === "fahrenheit to celsius") {
    alert(fahrenheitToCelsius(temperature) + " " + "C");

} else {
alert("Invalid conversion type.");
}
