function hello(x){
    const a  = "varA";
    const b = "varB";
    return function(){
        console.log(a,b,x);
    }
}

const ans = hello("arg");
ans();


function x(z){
    let a = "varA";
    let b = "varB";
    function y(){
        console.log(a,b,z);
    }
    y();
}
x("arg");