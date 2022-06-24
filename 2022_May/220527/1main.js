/*
객체(object)
기본 데이터 타입을 제외한 나머지를 모두 객체라고 할 수 있다.
함수, 배열, 정규표현식...등등
객체는 key와 value가 존재한다.

프로퍼티: 객체의 상태를 나타내는 값.
메서드: 프로퍼티를 참조하고 조작할 수 있는 동작.
*/
             /*
const person = {
    name: 'Lee',   //프로퍼티
    age: 20
};
            
*/
let counter = {
    num: 0,             // property
    increase: function() {  
        this.num++;           //method
    }
}
                 
//자바스크립트는 프로토타입으로 객체지향언어??

let person = {
    name: 'Lee',
    Hello: function() {
        console.log('Hello My name is ${this.name}');
    }
}
console.log(typeof person);
console.log(person);
console.log(person.name);
person.Hello();

//중괄호 내에 프로퍼티를 정의하지 않으면 빈객체 생성
let empty = {};

let student = {
    list:{a:10,b:20,c:30}, //객체
    print: function(){
        console.log("나는 프린트");
    }
}
/*
전역변수는 안쓰는게 좋지만 불가피하게 사용하게 된다면
  하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리
*/
let myObj ={};
myObj.cal = {a:null, b:null};
myObj.test = {c:null, d:null};
myObj.cal.a = 10;
myObj.cal.b = 20;
function sum() {
    return myObj.cal.a + myObj.cal.b;
}

let korea = {
    a:500,
    b:300,
    seoul:{
        a:100,
        b:20,
        c:50,
    },
}

let circle = {
    radius : 5,
    getDiameter : function() {
        return 2* this.radius;   //객체내의 this는 객체 자신을 가리키는 참조변수.(그냥 자기자신임)
    }
}
console.log(circle.getDiameter());

//프로퍼티 접근방법
// "."  "[]"
console.log(circle.radius);
console.log(circle['radius']); // '' 또는 "" 로 감싼 문자열이어야함

let obj = {a:10, b:20, c:30};
for (const key in obj) {
    console.log(key);
}
for(const val in obj) {
    console.log(obj[val]);
}
for(i in obj) {
    console.log("key : "+ i+ ', value : '+ obj[i]);
}




function User(name) {

    //this = {};
    this.name = name;
    this.isCheck = false;

    //return this;
}
let user = new User("홍길동");

function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.information = function() {
        console.log("나는 "+this.name+", 나이는 "+this.age+", 사는곳은 "+this.city);
    }
}
//인스턴스
//클래스에 의해 메모리에 저장된 실체>>(객체가 메모리에 저장되어 실제로 존재하는 것.
let p1 = new Person("사자",19,"에버랜드");
let p2 = new Person("호랑이",20,"밀림");
p1.information();
p2.information();

//!!간단한!!!실습
//1번
//회사에 4명이 있어요(모든 직원의 월급에 대한 정보를 담고 있는 객체가 있다!)
//모든 팀원의 월급을 합한 값을 구하고,(메서드로)//reduce?
//결과를 출력하세요~

//2번
//객체A가 프로퍼티 값이 숫자인 경우 그 값을 두배로 늘려주는 함수 만들기
let a = {
    w : 200,
    h : 500,
}
//>>
//a = {
//    w : 400,
//    h : 1000,
//}











