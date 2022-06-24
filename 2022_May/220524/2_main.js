/*
function ?

함수
코드 재사용성이 높다.
코드 유지보수가 좋다.
함수는 정의롤 통해서 생성한다.

*/

//키워드  이름  매개변수
function  sum  (a,b) {
    return    a+b;   //a와 b를 더한 결과를 리턴한다.(반환한다.내뱉는다.)
} //반환한다  반환값
let result = sum(2,5);
console.log(result);

function print(){
    console.log("함수호출!!");
}
print(); //함수호출

function sum1(a,b) {
    console.log(arguments.length); //argument.length : 매개변수의 길이(개수)
    return a+b;
}
console.log(sum1(1,2,3,4,5)) //인자가 초과되어도 무시한다.

/*
함수의 정의 방식에는 총 4가지가 있다.
1.함수선언문
function add(x,y) {
    return x+y;
}
2.함수표현식 // 변수에 함수를 담는다.
//  변수    익명함수
let add = function(x,y) {
    return x+y;
}           기명함수
let add = function add(a,b) {
    return a+b;
}
3.function생성자 함수
let add = Function('x','y','return a+b');

4.ES6 arrow Function
let add=(x,y) => x+y;
 */

/*
//var, let, const

console.log(a);
var a =1; //'var a'만 암묵적으로 끌어올린다. 호이스팅 (좋은현상아님)

foo(); //호이스팅일어남
foo2(); //함수표현식은 호이스팅이 일어나지 않는다.
function foo() {
    console.log("Hello world");
}

let foo2 = function() {
    console.log("나는 푸우우우~2");
}

let foo3;
foo3();
foo3 = function() {
    console.log("나는 푸우우우~3");
}   
*/

//호이스팅을 방지하려면
//1. var을 안쓰면됨
//2. 


//전역변수  지역변수


var a = 1;
for (let i = 0; i < 2; i++) {
    
    const d = "const로 선언된 d";

    for (let k = 0; k < 2; k++){
        console.log(d);

        if(true) {

            d = 0;
            let abc = 1;
            const zxc = 2
            var qwe = 3;
        }
        console.log(d);
        console.log(abc);
        console.log(zxc);
        console.log(qwe);
    }
}