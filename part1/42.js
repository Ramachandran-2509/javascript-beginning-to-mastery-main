// objects inside array 
// very useful in real world applications

// const users = [
//     {userId: 1, firstName: 'harshit', gender: 'male'},
//     {userId: 2, firstName: 'mohit', gender: 'male'},
//     {userId: 3, firstName: 'nitish', gender: 'male'},
// ]
// for(let user of users){
//     console.log(user.firstName);
// }

const employers = [
    {userId:652344, firstName:"Ramachandran", gender:"males", role: "senior process Executive", shift: "11.30 to 9.30"},
    {userId:752040, firstName:"Arul", gender:"male", role: "process Executive", shift: "11.30 to 9.30"},
    {userId:520464, firstName:"madhan", gender:"female", role: "process Executive", shift: "11.30 to 9.30"},

]

// for(let emp of employers){
//     console.log(emp.gender)
// }

const[,{firstName,gender,role,shift},{userId}]=employers
console.log(firstName);
console.log(gender)
console.log(role)
console.log(shift)
console.log(userId);