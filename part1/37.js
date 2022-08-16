// difference between dot and bracket notaion
const key = "email";
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"],
    "asddress": {
        city: "chennai",
        state: "tamilnadu",
        country: "india",

        pincode: "600089",
        "address line 1": "49/23 jeeva nagar",
        "address line 2": "second line",
        "address line 3": "Newwashermenpet",
    }

}

console.log(person.asddress["address line 1"]);
console.log(person["person hobbies"]);
person[key] = "Ramachandran@gmail.com";
console.log(person);  // {name: "harshit", age: 22, "person hobbies": Array(3), email: "
