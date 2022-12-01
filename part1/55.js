// function returning function 

function myFunc(){
    function hello(){
        return "hello world"
    }
    return hello;
}

const ans = myFunc();
console.log(ans()); 





function res(){
    function first(num1, num2){
        return(num1+num2)
    }
     return first;
}
const k=res();
console.log(k(4,5))


// let a=0;
// console.log(a++);
// console.log(++a);
// console.log(a);

function product(num1,num2){
    console.log(num1*num2)
}
product(4,5);

// currying
const productId=(num1)=>{
    return(num2)=>{
        return(num3)=>{
            return num1*num2*num3
        }
    }

}

console.log(productId(4)(5)(3))

// closure


function outer(){
    var name="ram"
    function inner(){
        var name="Ramachandran s"
        console.log("inner :", name )
    }
    console.log("outer :", name )
    inner()
}
outer()


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