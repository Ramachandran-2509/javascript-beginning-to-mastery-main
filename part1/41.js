// object destructuring
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};


band["age"]="26"
band["hobbies"] = ['cricket', 'football', 'tennis']
band["email"]= "svel936@gmail.com"

console.log(band);
let { bandName, famousSong, email, ...restProps } = band;
// let { bandName:name} = band;


console.log(bandName);
console.log(famousSong);
console.log(email);
console.log(restProps);

// const person = {
//   name: "Ramachandran S",
//   age: 25,
//   dob: "25/09/1996",
//   qualification: "B.C.A",
//   hobbies: ["cricket", "reading", "listening music"],
//   "job role": "developer",
//   address: {
//     city: "New York",
//     state: "New York",
//     country: "USA",
//     pincode: "10001",
//     "address line 1": "49/23 jeeva nagar",
//     "address line 2": "second line",
//     "address line 3": "Newwashermenpet",
//   },

// }

// let {name, age, qualification, ...rest} = person;
// console.log(name);
// console.log(age);
// console.log(qualification);
// console.log(rest);