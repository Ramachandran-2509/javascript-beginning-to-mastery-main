// objects inside array 
// very useful in real world applications

const users = [
    {userId: 1, firstName: 'harshit', gender: 'male'},
    {userId: 2, firstName: 'mohit', gender: 'male'},
    {userId: 3, firstName: 'nitish', gender: 'male'},
]
for(let user of users){
    console.log(user.firstName);
}

// const emoployer = [
//     {userId:652344, firstName:"Ramachandran", gender:"male", role: "senior process Executive", shift: "11.30 to 9.30"},
//     {userId:752040, firstName:"Arul", gender:"male", role: "process Executive", shift: "11.30 to 9.30"},
//     {userId:520464, firstName:"madhan", gender:"male", role: "process Executive", shift: "11.30 to 9.30"},

// ]

// for(let emp of emoployer){
//     console.log(emp.gender)
// }