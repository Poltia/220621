    //let message = "Hello";, age = 25, let num = 1;
//한줄에 , 로 구분하여 쓸수 있음. 권장하지않음


    //userName = "홍길동";
//var let const 없이 해도 되긴하나 권장하지않음

    //console.log(userName);

//변수명은 :
//숫자 불가
// "/" 불가. "-" 가능
//대소문자 구분

//기억하기 힘든것을 변수로 쓸땐 대문자로 쓰는게 관습.
//*예제
//const COLOR_RED = "#F00";
//const COLOR_GREEN = "#F0";

//변수명은 서술적이고 간결하게...

//*안좋은예
//const data = 10;
//const value




// +, -, *, /, %, **(거듭제곱 연산자)
/*
alert(2**2); //4(2*2)
alert(2**3); //8(2**3)
*/
/*
//산술연산자
5*4 // ->20
// 문자열을 연결
"my name is" + " Lee" // -> my name is Lee

const color = "red" // ->red
         //할당연산자
*/

/*
================ 
이항 산술 연산자
+, -, *, /, %
================
단항 산술 연산자
++(1씩 증가 해줌), --
*/

let x = 1;
//
x++; // x = x+1;
console.log("++후 x의 값은 : ?", x);
x--; // x = x-1;
console.log("--후 x의 값은 : ?", x);

let number =5;
let result;

result = number++; //선할당 후증가
console.log(result, number);

result = ++number; //선증가 후할당
console.log(result, number);

result = number--;
console.log(result, number); //선할당 후감소

result = --number;
console.log(result,number); //선감소 후할당


/* 
할당연산자
 =       |   x = 5
 +=      |   x += 5     x = x + 5
 -=      |   x -= 5     x = x - 5
 *=      |   x *= 5     x = x * 5
 /=      |   x /= 5     x = x / 5
 %=      |   x %= 5     x = x % 5

*/

let num = 10;
num+=5; // num =  num + 5
console.log("+= 연산자", num);
num-=5; // num =  num - 5
console.log("-= 연산자", num);





/*
!!비교 연산자!!

== (동등비교)  | a == b        a와 b가 값이 같다
===           | a === b       a와 b의 값과 타입이 같다.(엄격하게 비교)
!=            | a != b        a와 b는 값이 다르다.
!==           | a !=== b      a와 b는 값과 타입이 다르다.

*/

//예상하지못한 결과를 초래할수 있다.
console.log(5==5); //true
console.log(5=='5'); //타입은 다르지만 암묵적 타입변환(자바스크립트에서 자동적으로 변환)으로 true 가나옴.
console.log('0'==''); //false
console.log(0==''); //true... !?
//그래서 == 보다는 === 를 쓰는게 낫다.
console.log(5==='5'); //false

console.log(5!=8); //true
console.log(5!=5); //false
console.log(5!='5'); //false
console.log(5!=='5'); //true

/*
대소비교 연산자
 >          a>b         a가 b보다 크다.
 <          a<b         a가 b보다 작다.
 >=         a>=b        a가 b보다 크거나 같다.
 <=         a<=b        a가 b보다 작거나 같다.
*/
console.log(5>0); //true
console.log(5>5); //false
console.log(5>=5); //true
console.log(5<=5); //true

// //만약에 이러한 조건이라면(참이라면)
// const a = 1;
// const b = 2;
// if (a<b) {  //난 트루임. 맞으니까
//     //여기를 실행해라
// }

/*
삼항조건 연산자
편리하지만 가독성이 매우 떨어짐.
*/

let z = 3;
//결과를           true    false
let res = z % 2 ? '홀수' :'짝수'; //결과가 true이면 앞 항목, false면 뒤 항목

console.log(res);



/*
 논리연산자!!
 ||         논리합(OR)
======================================
 a || b  -> 둘중하나라도 true면 true
 0    0  -> false
 1    0  -> true
 0    1  -> true
 1    1  -> true
 =====================================
 &&         논리곱(AND)
 a && b  -> 둘다 true면 true
 0    0  -> false
 1    0  -> false
 0    1  -> false
 1    1  -> true
 =====================================
 !          부정(NOT)

*/

console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);

console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);

console.log(!false);

