// Operators and Expressions

// 1. Arithmetic Operators
let num1 = 10;
let num2 = 5;

console.log("Addition (+):", num1 + num2);
console.log("Subtraction (-):", num1 - num2);
console.log("Multiplication (*):", num1 * num2);
console.log("Division (/):", num1 / num2);
console.log("Exponent (**):", num1 ** num2);
console.log("Remainder (%):", num1 % 6);

// Order of Operations
// PEMDAS / BODMAS
let answer = 3 + 4 * (5 - 2) ** 2 / 2;
console.log("Answer:", answer);

// 2. String Expressions or Concatenation
let greeting = "Hi";
let name = "Peter";

console.log(greeting + " " + name + "!");

// 3. Comparison Operators
// type coersion: convert the type if necessary
// Equal to: compare if two values are equal
console.log("Equal to (==):", 5 == 5);
console.log("Equal to (==) with type coersion:", 5 == "5");

// type coersion: convert the type if necessary
// Not Equal to: compare if two values are not equal
console.log("Not Equal to (!=):", 5 != 5);
console.log("Not Equal to (!=) with type coersion:", 5 != "5");

// Strict Equal to (===): Check if two values are equal in value and in data type.
console.log("Strict Equal to (===):", 5 === 5);
console.log("Strict Equal to (===) with type coersion:", 5 === "5");

// Strict Not Equal to (!==): Check if two values are not equal in value and in data type.
console.log("Strict Not Equal to (!==):", 5 !== 5);
console.log("Strict Not Equal to (!==) with type coersion:", 5 !== "5");

console.log("Greater Than (>):", 5 > 3);
console.log("Less Than (<):", 3 < 5);
console.log("Greater Than or Equal to (>=):", 5 >= 5);
console.log("Less Than or Equal to (<=):", 3 <= 3);

// 4. Logical Operators
// AND -  &&
// OR - ||
// NOT - !

let sunny = false;
let warm = true;

// AND: true if all of the condition are met, otherwise false
console.log("Is it sunny AND warm?", sunny && warm);

// OR: true if atleast one of the condition is met, otherwise false
console.log("Is it sunny OR warm?", sunny || warm);

// NOT: Invert the value of a boolean
console.log("NOT:", !sunny)


// 5. Assignment Expression
// Assigning a value to a variable
let num3 = 10;
let num4 = 20;

// Addition Assignment +=
num3 += num4
console.log("New value of Num 3:", num3);
// Computation: 10 + 20 = 30

// Subtraction Assignment -=
num3 -= num4
console.log("New value of Num 3:", num3);
// Computation: 30 - 20 = 10

// Multiplication Assignment *=
num3 *= num4
console.log("New value of Num 3:", num3);
// Computation: 10 * 20 = 200

// Division Assignment /=
num3 /= num4
console.log("New value of Num 3:", num3);
// Computation: 200 / 20 = 10
