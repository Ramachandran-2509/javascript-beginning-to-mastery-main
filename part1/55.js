// function returning function 

function myFunc(){
    function hello(){
        return "hello world"
    }
    return hello;
}

const ans = myFunc();
console.log(ans()); 


// function add(){
//     function mulr(a, b){
//         console.log( 8 * 9);
//     }
//     mulr()
//     function mul(a, b){
//         return a * b;
//     }
//     return mul;
    
// }
// const r = add()
// console.log(r(5, 2))