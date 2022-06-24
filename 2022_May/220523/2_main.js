// 조건문


let number = 1;
let number1 = 2;
//만약에 조건이 참이라면(true)
 if(number<number1) {
    //여기를 실행해라
    console.log(1);
    //*실행코드가 한줄일 경우 { } 생략가능
 }
    // if(조건2){
    //     //실행코드
    // }

 const age = 30;
 const age1 = 20;
 if(age<age){
     console.log("if의 조건이 참이면 여기가 실행된다.");
 }
 else if(age > age1){
     console.log("바로 위에 있는 if문이 거짓일때만 여기가 실행");
 }
 else{
     console.log("위 조건이 전부 아니면 여기가 실행");
 }

    //조건이 길어질것같으면 변수 하나로 묶어서 처리. (코드간결화 하기!!)
    //  const isCheck = (a&&b || c&&d)
    // if(isCheck){
    //     //실행
    // }
/*
let inputNum = Number(prompt("아무 숫자나 입력"));

if(inputNum<10){
    console.log("if문 실행");
    console.log("내가 입력한 값 : ",inputNum);
}
else if(inputNum>10 || inputNum<20){
    console.log("첫번째 else if실행");
    console.log("내가 입력한 값 : ",inputNum);
}
else if(inputNum>10 && inputNum<20){
    console.log("두번째 else if 실행");
    console.log("내가 입력한 값 : ",inputNum);
}
else{
    console.log("else 실행");
}
*/


/* 실습
    입력을 4개 받는다.(점수 입력 우홋)
    평균값을 구한다
    평균값이 70~79  C학점
      80~89  B학점
      90~100 A학점
      70미만이면 낙제!
*/




