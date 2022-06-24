
/*
window.cinload = function() {
    //window 객체 로드 이후
};
*/



/* (함수에 함수를 불러서 일을함)
1.콜백 함수란 무엇인가? //비동기 함수: ?
비동기 방식으로 작성된 함수를 동기 처리 하기위해 주로 사용
비동기 처리를 기본으로 하고 일부 구간에서 순차적인 처리가 필요할때 (예? API)
응답을 받은 다음에 처리해야 할때
*/

//익명의 함수 사용
let num = ["222","111",3,4];
// forEach : 배열의 길이만큼 도는 함수
num.forEach(function(element,index) {
    //console.log(element);
    console.log(index);
}); 

//함수의 이름만 전달하는 방법
//매개변수로 이름과 함수를 받을 함수
//보통 함수를 선언한 뒤에 함수 타입 파라미터를 맨 마지막으로 하나 더 선언해준다.
function myFunc(text, callBack) {
    //매개 변수로 받은 text 보여줌
    console.log(text);
    //매개변수로 받은 콜백함수 사용
    callBack();
}

// callFunc 콜백으로 전달해서 보여줄 함수를 만듬
function callFunc() {
    console.log("i'm callBack")
}

//함수를 사용했고 첫번쨰 매개변수는 임의의 문자를 삽입
//함수를 전달하는 부분은 우리가 함수를 사용할때 ()괄호를 붙이는데
//()괄호는 함수를 사용하겠다는 뜻이므로,
// 콜백으로 함수를 전달할때는 ()괄호 없이 함수의 이름만 전달한다.
myFunc("aaba",callFunc);


//전역변수, 지역변수 콜백함수의 파라미터로 전달

//전역변수를 선언
let myName = "Allen";

//매개 변수로 함수를 받을 함수를 만듬
function callBackFunc(call) {
    //지역변수 선언
    let yourName = "Chris";
    console.log(call);
    call(yourName);
}

//매개변수로 넘겨줄 함수
function callName(you) {
    //매개변수로 넘길 함수를 선언해둔 myName 전역 변수를 사용하고
    //자신이 받은 매개변수 you를 사용한다.
    console.log(myName + " and "+ you + " are friends.");
}

//callBackFunc 함수를 사용 하는데 매개변수로 callName함수의 이름을 전달
callBackFunc(callName);


//콜백의 주의할 점 this를 보호하자
let con = {
    name: "홍길동",
    setName: function (firstName, lastName) {
        this.name = lastName + " " + firstName;
    },
};

function getName(firstName, lastName, callBack) {
    callBack(firstName,lastName);
    console.log(this);
}

getName("Allen", "Walker", con.setName);
con.setName("Allen", "Walker");
console.log(con.name);
console.log(window.name);

//우리가 getName이 함수에 전달한 callBack매개변수에는 con.setName의 함수가
//전달이 되었는데 con.setName(); 이렇게 코드상에서 사용하면
//this는 con 객체이지만 getName함수에 getName의 이름으로 callBack함수를
//전달해서 사용하면 this는 window 객체이다.



//제일 그지같은 코드
//콜백 지옥
// 첫번째로 숫자 값을 받고 두번째로 함수를 받는다.
function temp(num,call) {
    let _num = num * num;
    console.log(_num);
    call(_num);
}
//함수를 실행하는데 첫번째 매개변수로 5의 값을 전달
//두번째 매개변수로 매개변수 하나를 받을 익명 함수를 전달
temp(5,function(result) {
    //이 안에서 함수를 또 실행시키는데 위에 익명함수의 매개변수 값을 전달
    //첫번째 매개변수로 result(실행시킨후 값)을 다시 전달
    console.log("첫번째 콜백");
    temp(result,function(result){
        console.log("2nd callback");
        temp(result,function(result){
            console.log("3rd callback")
        })
    })
})

//해결방안
function add(num){
    return new Promise((resolve,reject) => {
        let _num = num + num;
        console.log(_num);
        resolve(_num);
    })
}
//Promise는 정상 수행 후 resolve, 실패 후 reject가 실행된다.
//callback을 사용 했던 것과 마찬가지로 resolve에 값을 담아 전달한다.

//Promise Hell이다 이건...
add(5).then(result => {
    add(result).then(result => {
        console.log("end");
    })
})
//Promise Hell을 탈출 하려면
function add(num) {
    return new Promise((resolve, reject)=>{
        let _num = num + num;
        console.log(_num);
        resolve(_num);
    })
}
add(5).then(result => {
    return add(result);
})
.then(result => {
    return add(result);
})
.then(result => {
    console.log("hell 지옥 탈출");
})

function eat(){
    return new Promise(function(resolve) {
        //setTimeout 밑에 쓴 숫자는 1000 이 1초
        //setTimeout은 밑의 시간 이후 실행
        setTimeout(() => {
            resolve('5초후 날 볼거야(작업완료)');
        }, 5000);
    })
}

//awit 처리될 떄 까지 기다려줌
(async function() {
    var result = await eat(); //eat resolve가 될때까지 기다려
    console.log(result);
})();