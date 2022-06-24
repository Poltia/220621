//ex) [1,2,3,4,5] = 9  return 하는 인덱스는 3,4

//배열 arr가 있고...어떤수 weight가 주어졌을때 합쳐서 weight가 되는 배열내
//두개의 인덱스를 반환하라. 만약 합쳐서 weight가 되는 항목 두개가 존재하지 않을경우
//-1 return

//   function findSum(arr, weight) {
//     //2중 포문 돌면서 다음인덱스와 비교
//     for (let i = 0; i < arr.length; i++) {
//       for (let k = i + 1; k < arr.length; k++) {
//         if (arr[i] + arr[k] == weight) {
//           //만약 배열안에 들어있는 두개의 값이 weight와 같다면
//           return [i, k]; //해당 인덱스 리턴
//         }
//       }
//     }
//     return -1; //실패 한다면 -1
//   }

//   const arr = [1, 2, 3, 4, 5];
//   const test = findSum(arr, 3);
//   console.log(test);

//   //   1,2,3
//   //   4,5,6
//   //   7,8,9
//   //   const arr1 = [[1,2,3],[4,5,6],[7,8,9]];

//   function Matrix(row, col) {
//     let jaggedArr = new Array(row);
//     for (let i = 0; i < col; i += 1) {
//       jaggedArr[i] = new Array(row);
//     }
//     return jaggedArr;
//   }

//   console.log(Matrix(3, 3));

/*
            input
            [1,0,1],
            [0,0,1],
            [1,1,1],

            output
            [1,1,1],
            [0,0,1],
            [1,0,1],

            //행렬을 왼쪽으로  90도 회전(반시계)
            1.행렬의 세번째 열이 회전된 행렬의 첫번째 행이 된다.
            2.행렬의 두번째 열이 회전된 행렬의 두번째 행이 된다.
            3.행렬의 첫번째 열이 회전된 행렬의 세번째 행이 된다/

            */
