var firstNumber = prompt("Enter the first number:");
var secondNumber = prompt("Enter the second number:");
var temp = firstNumber;
firstNumber = secondNumber;
secondNumber = temp;
alert("Your swapped numbers are :"+ firstNumber +" , "+ secondNumber);