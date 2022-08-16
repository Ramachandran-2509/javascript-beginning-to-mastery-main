// get and set attrubutes
// the below example using querySelector 
// only selector first ocuur a tag 
const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1)); 
link.setAttribute("href", "https://codprog.com");
console.log(link.getAttribute("href"));

// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));





// the below example using getElementBYtagName
// using specfice a tag we setattributes for particular a tag
// const link1 = document.getElementsByTagName("a")[1];
// console.log(link1.getAttribute("href").slice(1)); 
// link1.setAttribute("href", "https://codprog.com");
// console.log(link1.getAttribute("href"));