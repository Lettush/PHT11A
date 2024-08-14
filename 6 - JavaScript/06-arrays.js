// Arrays
let fruits = ["Apple", "Banana", "Cherry",
    "Orange", "Chico"];

console.log("Fruits:", fruits);
console.log("Length of Fruits:", fruits.length);

console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);

// .slice(starting_index, ending_index(excluded)): access a portion of the array
let sliced_fruits = fruits.slice(1, 4);
console.log("Sliced Fruits:", sliced_fruits);
console.log("Fruits:", fruits);

// Update
fruits[0] = "Avocado";
console.log("Fruits:", fruits);

// .push(element) - add an element at the end of the array
fruits.push("Mango");
console.log("Fruits:", fruits);

// .pop() - delete an element at the end of the array.
fruits.pop()
console.log("Fruits:", fruits);

// .splice(starting_index, delete_count, element/s that you want to add) - add or delete elements at a specified index
fruits.splice(2, 1, "Mango", "Grape", "Strawberry");
console.log("Fruits:", fruits);

// Iterate over each element then we will apply a function.
fruits.forEach(function (fruit){
    console.log("Fruit:", fruit);
})