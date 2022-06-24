let number1 = Math.floor(Math.random()*100);
let number2 = Math.floor(Math.random()*100);

/*
let result = Math.min(number1,number2);

document.write("첫번째 숫자 ", number1);
document.write("<br>")
document.write("두번째 숫자 ", number2);
document.write("<br>")
document.write("더 작은 숫자는 ",result);
*/

function min(number1,number2) {
    if (number1<number2) {
        return number1;
    }
    else if (number1>number2) {
        return number2;
    }
}
console.log(number1)
console.log(number2)
console.log(min(number1,number2))

