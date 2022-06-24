/*

array
배열이란?
 여러가지 자료를 순차적으로 나열.
 사용빈도 매우 높다.
 일반적인 배열은 인덱스로 빠르게 접근이된다. 요소를 삽입,삭제하는 경우에는 효율적이지않다.
 자바스크립트에서의 배열은 해시테이블로 구현된 객체(object)다.
  인덱스로 접근하는경우 일반적으로 접근하는 퍼포먼스가 떨어진다.
  요소를 삽입, 삭제하는 경우에는 일반적인 배열보다 빠르다.
*/
//1
/*
const arrNum = new Array();
arrNum[0] = 1;
arrNum[1] = 2;
arrNum[2] = "배열?";
console.log(arrNum);

//생성자 이용
const arrNum1 = new Array(1,2,3,"하하하하",'A');
console.log(arrNum1[0]);
console.log(arrNum1[3]);
console.log(arrNum1[1]);

//선언과 동시에
const arrNum2 = [1,2,3,4,5,6,7,8,9];
console.log(arrNum2);

//빈배열
const arrNum3 = [];
arrNum3[0] = 1;
arrNum3[1] = 2;
console.log(arrNum3);

//for문을 이용한 데이터
const arrNum4 = [];
for(let i = 0; i<5; i++) {
    arrNum4[i] = i+1;
}
console.log(arrNum4);

for(let i = 0; i<arrNum4.length; i++) {
    document.write(arrNum4[i]);
}


const arr = [1,2,3];
console.log("arr의 데이터 : ",arr);
console.log(arr.length);

arr.push(4); //요소추가
console.log("arr의 데이터 : ",arr);
console.log(arr.length);

arr.pop(); //요소삭제
console.log("arr의 데이터 : ",arr);
console.log(arr.length);

//현재 length 프로퍼티 값보다 작은 값을 할당하면 배열의 길이가 줄어든다.
const arr1 = [1,2,3,4,5]; //length : 5
arr1.length = 3;                  // 3
console.log(arr1);

const arr2 = [1];
arr2.length = 3;
console.log(arr2.length);
console.log(arr2); //출력: (3) [1. empty x 2]

const arr3 = [1, ,3];
console.log(arr3); //출력: (3) [1, empty, 3]



//
배열의 다양한 method들
push: 배열의 끝에 원하는 값을 추가한다.
pop: 마지막에 있는 요소를 삭제

shift: 배열의 첫번째 있는 요소를 삭제
const arr4 = [1,2,3,4,5,6,7];
arr4.shift();
console.log(arr4);
// 
reverse: 배열을 역순으로 나열한다.
let arr4 = [1,2,3,4,5,6,7];
arr4.reverse();
console.log(arr4);

//concat: 두개의 배열을 합침
const arr5 = [1,2,3,4,5,6,7];
arr4 = arr4.concat(arr5);
console.log(arr4);

//indexOf: 배열에서 인수로 전달된 요소를 검색하고, !인덱스를 반환!한다
//배열에 인수로 전달한 요소의 중복되는 요소가 여러개가 있다면 첫번째로 검색된 요소의 인덱스를 반환한다.
//만약 검색하려는 데이터가 없으면 -1을 반환
const arr = [1,2,2,3];
console.log(arr.indexOf(2));
console.log(arr.indexOf(4));
console.log(arr.indexOf(2,2)); //두번째 인수는 검색을 시작할 인수이다.

const foods = ['apple', 'banana', 'orange'];
//foods라는 배열에 orange가 있는지 확인
if(foods.indexOf('orange')===-1) {
    foods.push('orange'); // 없으면 orange를 넣어라
}

//foods라는 배열에 orange가 있는지 확인(ES7)
if(!foods.includes('orange')) {
    foods.push('orange'); //없으면 orange를 넣어라
}
console.log(foods);
*/
//splice: 배열 중간에 데이터를 삽입 또는 삭제를 하는경우 사용
const numArr = [1,2,3,4];
const res = numArr.splice(1,2);
//배열의 인덱스 '1'부터 '2'개의 요소를 제거하고 그자리에 '30', '40'을 넣는다.
console.log(res);
console.log(numArr);


const numArr1 = [1,2,3,1,2];
//배열에서 특정요소를 제거하려면 indexOf 메서드를 통해
//특정 요소의 인덱스를 가져오고 splice 메서드를 사용
function remove(arr,item) {
  //제거할 item 요소의 인덱스 //item요소가 여러개 있다면 '첫번째' 요소만 제거
    const index = arr.indexOf(item);
    //제거할 item이 있다면 삭제,제거
    if(index !== -1) arr.splice(index,1);
    return arr;
}
console.log(remomve(numArr1,2));