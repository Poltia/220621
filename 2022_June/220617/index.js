/* 정규표현식  regular expression */

//정규표현식은 문자 검색과 교체에 사용되는 패턴을 제공한다.
//자바스크립트에서 RegExp 객체의 문자 함수를 조합해 정규 사용할 수 있다.

// box변수에 box태그를 선택자로 담아 놓고
let box = document.querySelector(".box");

// box의 innerHTML Hi~ 를 대입
box.innerHTML = "Hi~there~";

let reg = new RegExp("Hi~");

// RegExp는 두개의 매개변수 string | RegExp, flag?: string
// 앞은 찾는 문자
// 두번째는 플래그
// 플래그는 정규 표현식에 영향을 주는 옵션


// 플래그의 종류에는

// i : 대소문자 구분없이 구별할 수 있다. A, a
// g : 패턴과 일치하는 모든 것을 찾는다. g가 없으면 일치하는 것에서 첫번째것만 가져온다.
// m : 다중 행모드. 줄이 내려져있어도 찾아온다. 백틱 같은걸로 행차이가 있어도


let string = "Hi~there~";

// 문자열 함수  match('찾는문자열','플래그');
box.innerHTML = string.match("Hi~");


let string2 = "하하하하하하하하하하";

// 슬래시는 "/"  자바스크립트에서 정규표현식을 생성하고 있다는것을 알려준다.
// 문자열에서 따옴표를 쓰는것과 같다.
box.innerHTML = string2.match(/하/g); //g 플래그 사용
// g는 패턴과 일치하는 모든 문자를 찾는데 ,로 구분

// 정규식을 사용하는 이유는
// 형식을 확인할때... 이메일인지 뭐 그런거 할때 사용한다고... ... ... ...


let str = "i'm Flag, i'm string";

let str2 = str.match(/flAg/i); // i 플래그 사용
// i 는 대소문자 구별 없이 문자를 찾는다.

box.innerHTML = str2;

//찾은 문자열을 배열의 형태로 담아 둔다.
console.log(str2);
console.log(str2[0]);
console.log(str2.length);

box.innerHTML = str2;

// 나는 웹 개발자 .본인 이름.
//

let name = "나는 웹 개발자 본인 이름";

box.innerHTML = name.match(/나는/);
box.innerHTML += name.match(/ 웹/);
box.innerHTML += name.match(/ 개발자/);
box.innerHTML += name.match(/ 본인 이름/);

/* 그냥 해봄
box.innerHTML = name.match(/우종화/);
box.innerHTML += name.match(/는 /);
box.innerHTML += name.match(/개발자/);
*/

// 편하게 바꿔보기
// name2에 box.innerHTML에 넣으면 내용은 "나는 웹 개발자 본인이름" 이렇게 들어있고
// 해당 문자열을 찾아서 바꿔주는 편리한 아이 (replace);
let name2 = box.innerHTML;

// replace (정규식 생성, 찾은 문자열을 바꿔줄 문자)
name2 = name2.replace(/ 본인 이름/i, " 우종화");

box.innerHTML = name2;

// replace의 두번째 매개변수에 특수문자를 입력하면 특수한 방법으로 문자열을 교체할 수 있다.

/*특수한 방법
$& 패턴과 일치하는 부분의 문자열 (얘만 많이 씀)
$` 일치하기 전의 문자열의 일부를 대입
$' 일치한 후 문자열의 일부를 대입
*/
/*
let name3 = box.innerHTML;
box.innerHTML = name3.replace(/홍길동/,"$& 집에 가고 싶다");*/



/* 실습 */
// 1. input을 2개 만들고. 하고싶은일, 이름 (입력받는거는 버튼으로 처리, 총 버튼 2개)
// 2. 두개가 box안의 내용이나 콘솔에 나오고
// 3. 교체버튼을 누르면 바뀌기
// 4. 이름 뒤에 하고싶은일 대입 (두개의 위치를 바꿔보기)

// 5. 다하면, 이름이랑 하고싶은일 사이에 시간도 넣기




