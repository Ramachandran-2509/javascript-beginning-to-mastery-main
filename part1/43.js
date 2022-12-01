// nested destructuring 
const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nithi', gender: 'female'},
]

const [{ firstName: users2firstName, userId, }, , { gender: users3gender }] =
  users;

console.log(users2firstName);
console.log(userId);
console.log(users3gender);



