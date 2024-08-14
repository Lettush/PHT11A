let elementWithID = document.getElementById("first-div");
console.log("Element selected by ID:", elementWithID);

// Modify the textContent Property
elementWithID.textContent = "Div 1";

let elementsWithClass = document.getElementsByClassName("sample-div");
console.log("Elements selected by Class:", elementsWithClass);

// Modify the textContent Property of Index of 1
elementsWithClass[1].textContent = "Div 2";