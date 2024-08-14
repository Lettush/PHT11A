// Control Flow Structures

// 1. Conditional Statements
// Allow us to execute different blocks of code based on a condition.

// if, else if, else statement
// Conditional Block ()
// Code Block {}
let temperature = 22;
if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature < 20) {
    // Range: 0 - 19
    console.log("It's cool outside.");
} else {
    console.log("It's warm outside.");
}


// switch-case statement
let day = "Friday";
switch (day) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's the end of the week days.");
        break;
    default:
        console.log("It's just a regular day.");
}

// 2. Looping Statements

// For Loop
// 1st: Variable Initialization
// 2nd: Condition Expression
// 3rd: Increment/Decrement
for (let i=1; i <= 3; i++){
    console.log("For Loop Count:", i);
}

// While Loop
let count = 4;
while(count <= 3){
    count++;
    console.log("While Loop Count:", count);
}

// Do-While Loop
let counter = 4;
do {
    console.log("Do-While Loop Count:", counter);
    counter++;
} while (counter <= 3);