/*

      버블정렬
      가장 간단하지만 전체 배열을 순회하면서 이전항목이 다음 항목보다 큰 경우 두 항목 교환
      모든 가능한짝을 비교하기때문이다.

      6 1 2 3 4 5
      1 6 2 3 4 5
      1 2 6 3 4 5
      1 2 3 6 4 5
      1 2 3 4 6 5
      1 2 3 4 5 6
      */
function random(n) {
  let arr = new Array();
  let num;
  let temp;

  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }
  for (let i = 0; i < arr.length; i++) {
    num = Math.floor(Math.random() * n);
    temp = arr[i];
    arr[i] = arr[num];
    arr[num] = temp;
  }
  return arr;
}
function bubbleSort(array) {
  const arrlen = array.length;
  for (let i = 0; i < arrlen; i++) {
    for (let k = 0; k < arrlen - 1 - i; k++) {
      if (array[k] > array[k + 1]) {
        let temp = array[k];
        array[k] = array[k + 1];
        array[k + 1] = temp;
      }
    }
  }
  return array;
}
let bubbleSorting = random(100000);
console.log("버블 정렬전 : ", bubbleSorting);
let startTime = new Date().getTime() / 1000;
console.log("버블 정렬 후 : ", bubbleSort(bubbleSorting));
let endTime = new Date().getTime() / 1000;
console.log(`정렬시간 : ${endTime - startTime}`);
