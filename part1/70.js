// optional chaining 

const user  = {
    firstName: "harshit",
    age : "23",
     address: 
     {
        houseNumber: '1234',
        addressLine1: '49/23 jeeva nagar',
        // address_line_1: "49/23 jeeva nagar",
        addressLine2: 'xyz',   
        street: 'abc street',
        city: 'pune',
        state: 'maharashtra',
        country: 'india',
        pincode: '400089'
    
    }
}



console.log(user?.firstName);
console.log(user?.address?.houseNumber);
console.log(user?.age);
console.log(user?.address["addressLine1"]);