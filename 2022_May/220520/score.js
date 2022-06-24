let english = prompt("영어 점수를 입력하세요");
let math = prompt("수학 점수를 입력하세요");
let science = prompt("과학 점수를 입력하세요");
let korean = prompt("국어 점수를 입력하세요");

let englishScore = Number(english);
let mathScore = Number(math);
let scienceScore = Number(science);
korean = Number(korean);


const total = englishScore+mathScore+scienceScore+korean;

console.log("총 점수는", total, "입니다.");
console.log("네 과목의 평균 점수는", total/4,"입니다.");




















// let english = 90;
// let math = 88;
// let science = 84;
// let korean = 97;

// console.log(english+math+science+korean);


// const average = english+math+science+korean;

// console.log(average/4);