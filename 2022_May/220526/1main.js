/* 혼자복습
let lottoNum = [];
let res = [];

for(i = 1; i <= 45; i++) {
    lottoNum.push(i)
}
console.log(lottoNum);

for(i = 0; i < 6; i++) {
    let pick = Math.floor(Math.random()*(45-i));
    res.push(lottoNum[pick]);
    lottoNum.splice(pick,1);
}
console.log(res);
*/


/*
고차함수: 함수를 인수로 전달받거나 함수를 반환하는 함수
    고차함수는 외부상태의 변경이나 가변데이터를 피하고 !불변성!을 지향하는
    함수형 프로그래밍에 기반을 두고 있음.
*/


//sort: 정렬함. 원본배열을 직접 변경하며 정렬된 배열을 리턴한다. (기본적으로 오름차순)
const fruits = ['banana','orange','apple'];
fruits.sort(); //기본적으로 오름차순
console.log(fruits);

fruits.reverse(); //내림차순 정렬
console.log(fruits);


const points = [40,30,1,5,2,25,100];

points.sort(); 
console.log(points);
//출력: (7) [1, 100, 2, 25, 30, 40, 5]
//문자열로 인식하기때문에 이렇게 출력됨

// 숫자요소를 정렬할때는 정렬순서를 정의하는 비교함수를 인수로 전달해야한다.
points.sort((a,b)=>a-b);
console.log(points);
//출력: (7) [1, 2, 5, 25, 30, 40, 100]

/* arrow function 예제
let sum - function(a,b) {
    return a+b;}
let sum1 = (a,b) => a+b; //arrow function
                       //두개는 같음

let double = n=>n*2;
letdouble1 = function(n) {
    return n*2;
}

let print = ()=>alert('안녕');//인자가 없을땐 빈괄호도 ok
*/
/*
//forEach  
const numbers = [1,2,3];
const pows = [];*/
/*
for(let i = 0; i<numbers.length; i++) {
    pows.push(numbers[i] **2);
}*//*
numbers.forEach(item=>pows.push(item**2));
//중단 불가능, for문 보다 성능은 떨어지지만, 가독성이 좋다.
console.log(pows);
console.log(numbers);


//(!매우중요함!)
//map 

const number = [1,4,9];           //sqrt: 제곱근을 만듬(루트 씌우는거)
const roots = number.map(item=>Math.sqrt(item));

console.log(roots); //새로운 배열을 반환한다.
console.log(number); 
//고차함수는 !원본배열은 건드리지 않는다.!


//함수 오버로딩(함수 이름은 동일하지만 매개변수 갯수가 다르거나 자료형이 다르다.)

function myFunc(a,b,c) {
    const len = argument.length;
    if(len==0) {
        console.log("매개변수 없음");
    }
    else if(len==1) {
        console.log("한개");
    }
    else if(len==2) {
        return a+b;
    }
    else {
        return a+b+c;
    }
}

            //디폴트 매개변수라고 함(매개변수를 지정한거)
function call(a,b = 5) {
    return a+b;
}
console.log(call(1));


//Recursive Function (재귀함수) : 함수안에 자신을 호출
//단순하게 생각해, 내 자신을 호출하는거야!

//1~100까지 합 (보통 for문을 쓰면)
let res = 0;
for(let i = 0; i<101; i++) {
    res+=i;
}
//나는 재귀함수 (종료조건이 !반드시! 있어야한다.)
function RecursiveFunction(n) {
    if(n<=1) return 1; //종료조건(재귀함수는 종료조건이 있어야함)
    return n+RecursiveFunction(n-1);
}
console.log(RecursiveFunction);
*/
//피보나치 수열
function fibo(num) {
    let res = [0,1];
    if(num==0) {
        console.log([0]);
    }
    if(num==1) {
        console.log([0,1]);
    }
    for(let i = 2; i<=num; i++) {
        res.push(res[i-2]+res[i-1]);
        console.log(res);
    }
}
fibo(8);

function recursiveFibo(num) {
    if(num<2) return num;
    return recursiveFibo(num-1)+recursiveFibo(num-2);
}
console.log(recursiveFibo(8));
//단점: 메모리를 많이먹는다. 느리다. 종료조건이 없으면 끝나지 않는다.
//장점: 변수의 갯수가 줄어들어 코드가 간결해진다.

/*실습

숫자야구게임만들기
1.컴퓨터는 임의의 숫자 3개를 낸다.
2.유저는 아무거나 내가픽?

ex) pc 1 2 3
 user  7 8 9   out>숫자랑 자리 다 안맞음
 ===========
   pc  4 5 6
 user  5 7 8    1ball>숫자는 1개 맞고 자리가 x
 ===========
   pc  1 2 3
 user  1 2 4   2strike>숫자 2개 o, 자리도 2개 o
 ===========
   pc  1 4 7
 user  4 5 7    1strike 1ball > 숫자,위치 1개 o, 숫자만 1개 o
 ===========

*/






