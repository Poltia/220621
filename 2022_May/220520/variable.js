//변수(데이터를 저장하는 공간)

//키워드 변수
   var   num = 1;
console.log(num);

  //string => 문자열
var str = "나는 무엇일까요?"
console.log(str);

//변수를 사용하려면 !반드시! 선언 을 해야한다.
var num1; // 변수 선언
num1 = 10;  //초기화(어떠한 값을 대입)
console.log("변수 num1에 들어간 녀석은? : ",num1);
var num2 = 20; //변수 선언과 동시에 초기화

console.log(num2);


var num3 = 100;
num3 = 200;
console.log(num3);


//var의 단점 -- ((블록레벨 스코프를 지원하지않고, 함수레벨 스코프를 지원한다.))
var score; // 선언
score = 100; //할당
console.log(score);
score = 20; //재할당
console.log(score);

//var : 재선언, 재할당 가능
//let : 재할당은 가능하지만, 재선언은 불가
//const : 재할당, 재선언 불가
var score = 100000;//재선언, 재할당
console.log(score);


let number = 5;
console.log("let으로 선언한 녀석",number);
number = 10;
console.log("let으로 선언한 녀석",number);
// let number = 1;   재선언 불가

const maxNumber = 1;
console.log("const 키워드로 선언한 녀석",maxNumber);
//maxNumber = 2; //재할당 불가
//console.log("const 키워드로 선언한 녀석",maxNumber);
//const maxNumber = 10; //재선언 불가


const a = 1;
const b = 2;
const c = a+b;
console.log(c);

//!!변수이름을 지을때 주의사항.(naming)!!
//누가봐도 알수있게 지을것!!
//한글변수 사용금지!! (가능은하지만 절대금지!)
//풀네이밍하는 버릇을 들여라!!
//


/*
    데이터타입
    =============================
    원시타입     | 숫자타입(number) : 숫자, 정수, 실수 구분없이 하나의 숫자타입만 존재
                | 문자열타입(string) : 문자열
                | 불리언타입(boolean) : 참(true)과 거짓(false)
                | undefined : var키워드로 선언된 변수에 암묵적으로 할당되는 값
                | null : 값이 없다는 것을 의도적으로 명시할때 사용하는 값
                | 심벌타입(symbol) : (잘안씀) ES6에서 추가된 7번째 타입.
    -------------------------------------
    객체타입     | 객체, 함수, 배열등등...
 */


const inteager = 10; //정수
const double = 10.12; //실수
const negative = -20; //음의 정수

console.log(typeof inteager);  //typeof : 뒤에오는 변수의 타입을 알려준다.
console.log(typeof double);
console.log(typeof negative);

const binary = 0b01000001; //2진수
const hex = 0x41;  //16진수 (0x로 시작하는건 거의 16진수)
console.log(binary);
console.log(hex);

console.log(1===1.0); //출력 true
console.log(3/2);     //출력 1.5


const string = "문자열"; //문자열은 ""
const string1 = '문';    //한글자는 ''    를 사용
console.log(string);
console.log(string1);




// let d = 10;
// alert(d);

// let value = prompt("숫자입력해보기");
// console.log("value의값",value);

/*
    사칙연산
    + - * / %
    % >> 몫은 버리고 나머지(모듈러연산)
*/

const NUMBER1 = 5;
const NUMBER2 = 3;

const RESULT = NUMBER1+NUMBER2;
const RESULT1 = NUMBER1-NUMBER2;
const RESULT2 = NUMBER1*NUMBER2;
const RESULT3 = NUMBER1/NUMBER2;

const RESULT4 = NUMBER1%NUMBER2;


console.log(RESULT);
console.log(RESULT1);
console.log(RESULT2);
console.log(RESULT3);

console.log(RESULT4);

//prompt -> 문자열로 받아들임

let input1 = prompt("첫번째 숫자입력");
let input2 = prompt("두번째 숫자입력");

let inputTypeCasting = Number(input1); //입력한 문자열을 숫자로 형변환
let inputTypeCasting1 = Number(input2);
//형변환 : 문자열을 숫자로 바꿈

console.log(input1+input2); //결과는 문자열로...
console.log(inputTypeCasting+inputTypeCasting1); //위에 형변환에 의해 원하는 결과가 나온다

/*실습
입력을 4개의 점수를 받는다 (영어 수학 과학 국어)
입력받은 4개의 총 합을 구한다.
평균값을 출력해라.
*/