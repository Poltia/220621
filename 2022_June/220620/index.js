/* RegExp의 test함수 */

/* test함수는 일치하는 부분의 문자열이 있으면 true를 반환하고 틀리면 false를 반환
주로 쓰는곳은 .. 이메일, 비밀번호, 아이디의 형식검사*/

btn.onclick = function() {

    //(input의 값을 val에 담고)?
    let val = "test";

    //검사식
    //정규식 객체 생성 new RegExp(검사식, 플래그)
    let reg = new RegExp(val,"i"); //i는 대소문자 구분안함

    // input.value가 test가 맞는지 확인 test() 함수로.
    // 맞으면 true, 틀리면 false
    console.log(reg.test(input.value));
}

let str = "this is true";
let reg = /this/i;

// match(정규식 객체) str문자를 검사한다.
// 문자열에 있는 함수
console.log(str.match(reg)); //맞는 문자를 반환

// 정규식의 test함수 사용
// 정규식에 있는 함수
console.log(reg.test(str)); //식에 적합한지 확인해준다. (true, false)


// 문자클래스들

//문자 클래스는 특정 문자의 특별한 표현이다.
let str2 = "a1a2a3a4a5a--6a7a8a998732465";

// \d: 숫자를 검사하는데 플래그 g를 붙여서 모든 숫자를 검사.
let reg2 = /\d/g;

console.log(str2.match(reg2));

// join함수는 배열의 요소 하나하나를 합쳐서 하나의 문자열로 반환해주고,
// join(매개변수)  값과 값 사이의 구분자를 바꿀수 있다.
// 매개변수 문자로 바꿔준다.
let num = str2.match(reg2).join();

// str2.match(reg2) 배열을 join()함수가 하나의 문자열로 반환한다.
// default 구분점은 , 로
console.log(num);

// join()에 매개변수를 문자열로 추가하면 구분점을 그 문자열로 바꿀 수 있다.
let num2 = str2.match(reg2).join("");
console.log(num2);


/*문자클래스 종류

1. \d  모든 숫자 : 0~9까지의 숫자
2. \s  공백 : 줄바꿈이나 공백 기호
3. \w  문자 : 단어에 들어가는 문자와 _(언더바)
            가능- 라틴문자, 숫자 등. 불가능- 키릴문자, 힌디분자
*/

/* 실습
input 입력받고 버튼 누르면
문자만 뽑아서 페이지에 보이거나 콘솔에 보이기.
구분점은 _ 언더바로*/
/*
btn.onclick = function() {
    let val = input.value.match(/\w/gi).join("");
    let word = val.replace(/\d/gi, "");
    word = word.match(/\w/gi).join("_");
    console.log(word);
}*/


// 문자클래스의 반대
/* 반대클래스
1. \D : \d의 반대. 숫자가 아닌것들
2. \S : \s의 반대. 공백이 아닌것들
3. \W : \w의 반대. 단어,숫자가 아닌것들
*/

let str3 = "a1a2a3a4a5a6a7a8a945798347";

// replaceAll함수는 해당되는 전체 문자 변환
console.log(str3.replaceAll("a",""));

// /\D/  숫자가 아닌것들 전체
console.log(str3.replaceAll(/\D/g,""));


// 특별한 문자 클래스
// .(dot) : 줄바꿈 문자를 제외한 모든 문자 (\n) << 줄바꿈문자

// 특수문자는 물론, 모든 문자를 다 잡는다.
console.log("-1245".match(/./));

///=================================
// 문자 클래스에서 여러개 문자를 조건으로 검사
console.log("e3 q".match(/\w\d\s\w/));

// 수량  {숫자}
// 숫자 갯수 3개까지
console.log("123456789".match(/\d{3}/));

// 갯수 범위
// {최소 갯수, 최대 갯수}
console.log("12345678".match(/\d{2,3}/));

// {최소 갯수,}  최소갯수는 3개이고 최대 갯수는 상관없음.
console.log("12345678".match(/\d{3,}/));

/* 세트 및 범위
[]대괄호 안의 문자 또는 문자 클래스
임의의 문자를 검색한다. */

// 세트 사용
// 문자를 찾는데 A나 Z가 앞에 있고 BC가 뒤로 붙은 문자
// gi 붙여서 모두 검색하고 대소문자 구분 없이
console.log("ABC ZBC XBC".match(/[az]bc/gi));


/* 범위 사용
// [0-9A-F] : 0~9까지의 숫자 또는 문자 A~F까지를 찾는다는 뜻
// [0-9]는 \d와 같다.
// [a-zA-Z0-9_]는 \w와 같다. */
console.log("ABCDE".match(/A[0-9A-F][0-9A-F]/));

/* 범위 제외
[^0-9]\D : 숫자를 제외한 모든 문자 제외
[^\s] : 공백이 아닌 모든 문자 제외 */

// 숫자와 문자를 제외해서 abc를 제외한 문자가 나온다.
console.log("abc123.-".match(/[^\sA-Z]/gi));



/* 과제>> 회원가입 페이지 만들기
1. 부트스트랩 사용하던지 해서 css 사용하던지 이쁘게 만들고
2. input에 회원가입 조건 추가해서 통과하면 수락되게(이름, 전화번호, 이메일)
3. input에 쓴 값이 회원가입 조건에 충족하지 않으면
4. 충족되지 않은 이유 표시 */