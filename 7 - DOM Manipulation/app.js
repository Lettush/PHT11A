/* == TARGETING == */
let elementWithID = document.getElementById("first-div");
console.log("Element selected by ID:", elementWithID);

// Modify the textContent Property
elementWithID.textContent = "Div 1";

let elementsWithClass = document.getElementsByClassName("sample-div");
console.log("Elements selected by Class:", elementsWithClass);

// Modify the textContent Property of Index of 1
elementsWithClass[1].textContent = "Div 2";

// Tag Name Selector
let listItems = document.getElementsByTagName("li");
console.log("List Items:", listItems);
listItems[0].style.color = "crimson";

// MODERN WAY
// querySelector - FIRST occurence
let orderedListItem = document.querySelector(".ordered-list");
console.log("Ordered LI:", orderedListItem);

let h3Child = document.querySelector("div h3");
console.log("Div h3 Child:", h3Child);

// querySelectorAll - ALL occurences
let h3Children = document.querySelectorAll("div h3");
console.log("Div h3 Children:", h3Children);
console.log(h3Children[0]);

/* == MODIFICATION == */
// Changing Styles
h3Children[0].style.backgroundColor = "black";
h3Children[0].style.color = "white";
h3Children[0].style.padding = "10px";

h3Children.forEach(function (heading) {
    heading.style.backgroundColor = "black";
    heading.style.color = "white";
    heading.style.padding = "10px";
})

// Change Text
// textContent / innerText
h3Children[0].textContent = "<em>Hello!</em>";

// innerHTML
h3Children[0].innerHTML = "<em>Hello!</em>";

// Updating Element Attributes
let dayNightIcon = document.querySelector("#day-night-icon");
dayNightIcon.setAttribute(
    "src",
    "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
)

// Appending
/* 
    1. Create Element
    2. Assigning Classes, Text and Attributes
    3. Append
*/
let parentElement = document.querySelector("#parent-element");
let createdElement = document.createElement("div");
createdElement.textContent = "Child Element";
parentElement.appendChild(createdElement);

// Removing
let elementToBeRemoved = document.querySelector("#element-to-be-removed");
elementToBeRemoved.remove();

/* == EVENT LISTENERS == */
let darkModeBtn = document.querySelector("#dark-mode-btn");
darkModeBtn.addEventListener("click", function() {
    let pageContainer = document.querySelector("#page-container");
    pageContainer.style.backgroundColor = "black";
    pageContainer.style.color = "white";

    let pageModeText = document.querySelector("#page-container div");
    pageModeText.textContent = "Dark Mode";
})