// WAP to print weekday for all working days and holiday for saturday and sunday
//  import package

const prompt = require('prompt-sync')({sigint:true})

const day = prompt("Enter any day: ")
console.log(day, typeof day);

switch (day) {
    case "monday":
        console.log("This is a weekday");
        break;
    case "tuesday":
        console.log("This is a weekday");
        break;
    case "wednesday":
        console.log("This is a weekday");
        break;
    case "thursday":
        console.log("This is a weekday");
        break;
    case "friday":
        console.log("This is a weekday");
        break;
    case "saturday":
        console.log("This is a Holiday");
        break;
    case "sunday":
        console.log("This is a Holiday");
        break;
    default:
        console.log("Enter a valid day!!!");   
        break;
}

console.log("Tast Completed");
