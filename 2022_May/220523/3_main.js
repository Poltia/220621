


const a = 1;
switch (a) {
    case 1:
        console.log("I'm switch.");
        break;

    default:
        break;
}
/*  기본형
switch (표현식1) {
    case 표현식1:       //if
        break;  //조건이 성립되면 코드블럭에서 탈출하는 역할.
    case 표현식2:       //else if
        break;

    default:           //else
        break;
}                                           */
/*
let input = Number(prompt("숫자를 입력하세요"));
const COMPARE_NUM = 1;
const COMPARE_NUM_1 = 2;
switch (input) {
    case COMPARE_NUM:
        console.log("1st case running")
        console.log("내가 입력한 숫자 : ", input);
        break;
    case COMPARE_NUM_1:  //2
        console.log("2nd case running")
        input++;
        console.log("input number : ", input);
        break;
    default:
        console.log("deafault running")
        break;
}                                               */


// 조건이 간단할 때는 if를 쓰는게 좋다.
// 조건이 많을때는 가독성을 위해 switch를 쓰는게 좋다.



                        //0과1사이의 난수 발생
let randomNumber = Math.random();
console.log(randomNumber);
                //소수점 첫번째자리를 버리고 정수를 보여줌.
let rand1 = Math.floor(Math.random()); 
console.log(rand1);

let rand2 = Math.floor(Math.random()*10);
console.log(rand2);