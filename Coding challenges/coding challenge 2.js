var num1= window.prompt("fisrt number");
var num2= window.prompt("second number");
var operation= window.prompt("type one of the following + or - or * or /")
switch(operation){
    case "+" : console.log(num1+num2);
    break;
    case "-" : console.log(num1-num2);
    break;
    case "*" : console.log(num1*num2);
    break;
    case "/" : console.log(num1/num2);
    break;
    default: console.log("enter valid input");
}

