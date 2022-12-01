// arrow functions 

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}


// const user2 = {
//     firstName : "Ramachandran",
//     age: 25,
//     about(){
//         console.log(this.firstName, this.age);
//     }   
// }



user2.about();