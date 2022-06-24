
let number1 = Math.floor(Math.random()*10+1);
let number2 = Math.floor(Math.random()*10+1);
/*
console.log("첫번째 숫자 ",number1);
console.log("두번째 숫자 ",number2);
console.log("Math.pow(하면)");
console.log(Math.pow(number1,number2));
*/

function pow(number1,number2) {
    return number1 ** number2;
}

console.log(number1);
console.log(number2);
console.log(pow(number1,number2));