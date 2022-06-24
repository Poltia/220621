
//반복문
for(변수 선언문 or 할당문; 조건식; 증감식) {
    조건식이 참인경우 반복 실행할 것들
}  
 예제
for(let i = 0; i<=10; i++) {
    console.log(i);
    document.write(i);
    document.write("<br>");
}

let res = 0;
for(let i = 1; i<=100; i++) {
    res = res+i;
}
document.write(res);

for(let i = 0; i<=10; i++) {
    if(i==2)continue; //continue : 건너뛰라는 뜻. 예외처리할 때 사용
    console.log(i);
}

for(let i = 5; i>=0; i--) {
    console.log(i);
}   

//2중 for  
for(let i = 0; i<3; i++) {
    for(let k = 0; k<3; k++) {
        console.log(i,k)
    }
}     //i = 0일때 k값 3종류, i = 1일때 k값 3종류, i = 2일때 k값 3종류... 를 출력

//실습 뿅
//구구단 출력하기
let result = 0;
for(let a = 2; a<=9; a++) {
    for(let i = 1; i<=9; i++) {
        result=a*i
        console.log(a, i, result)
    }
}    

//기본적으로 무한루프
//!종료조건!이 있어야한다.

let number = 0;
while(true) {
    number++;
    console.log(number);
    if(number===10)break;
}

while(number<10) {
    number++;
    if(number %2 !=0)continue; //number를 2로 나눴을때의 나머지가 0이 아니면 건너뛰어라. 출력= 2 4 6 8 10
    console.log(number);
} 

//별짓기 실습
for(let i = 0; i<5; i++) {
    for(let k = 0; k<=i; k++) {
        document.write('*');
        console.log(i, k);
    }
    document.write('<br>');
}  
document.write('<br>')
for(let i = 4; i>=0; i--) {
    for(let k = 0; k<=i; k++) {
        document.write('*');
        console.log(i, k);
    }
    document.write('<br>');
}
document.write('<br>')

for(let i = 0; i<5; i++) {
    for(let j = 3; j>=i; j--) {
        document.write('&nbsp');
    }
    for(let k = 0; k<=i; k++) {
        document.write('*');
        console.log(i, k);
    }
    document.write('<br>');
}
document.write('<br>')
for(let i = 4; i>=0; i--) {
    for(let j = 3; j>=i ; j--) {
        document.write('&nbsp')
    }
    for(let k = 0; k<=i; k++) {
        document.write('*');
        console.log(i, k);
    }
    document.write('<br>');
}