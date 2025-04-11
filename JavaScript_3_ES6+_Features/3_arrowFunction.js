// Arrow Function: write function syntax in one line, in case it has just one expression

//-- default way:

function sum_1(a,b){
    return a+b;
}

//-- arrow function way:

let sum_2 = (a,b)=>a+b;

console.log(sum_2(1,2));