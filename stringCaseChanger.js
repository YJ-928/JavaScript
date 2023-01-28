var my_string = prompt("Enter your string:");
alert("Your String all Lower_Cased: "+ (my_string.toLowerCase()) + " .");
alert("String all Upper Cased: "+ (my_string.toUpperCase()) + " .");
var cap_string = my_string.slice(0,1);
var rem_string = my_string.slice(1,(my_string.length+1));
cap_string = cap_string.toUpperCase();
var final_string = cap_string + rem_string;
alert("Only first Letter Capitalised String is: "+ final_string + " .");