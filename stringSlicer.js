var ourString = prompt("Enter your Concatinated String here:");
var lowerRange = prompt("Enter the Slicer starting position value:");
var upperRange = prompt("Enter the Slicer ending position value:");
var StringSliced = ourString.slice(lowerRange,upperRange);
alert("Your Desired String is: " + StringSliced + " .");