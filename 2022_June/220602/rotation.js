/*
  0 1 2
0[1,2,3],  00 01 02>>20 10 00
1[4,5,6],  10 11 12>>21 11 01
2[7,8,9]   20 21 22>>22 12 02

[3,6,9],
[2,5,8],
[1,4,7]


00 -> 20
01 -> 10
02 -> 00

10 -> 21
11 -> 11
12 -> 01

20 -> 22
21 -> 12
22 -> 02

*/
        //[[3,6,9],[2,5,8],[1,4,7]];
let arr = [[1,2,3],[4,5,6],[7,8,9]];
let array = [[],[],[]];
console.log(arr[0][0]);

//function move(a,b) {}

for (i = 0; i <3; i++) {
  for (k = 2; k >= 0; k--) {
    if (k == 2) {
      //arr.splice([i][k]);
      array[0][i] = arr[i][k];
    }
    else if (k == 1) {
      //arr.splice([i][k]);
      array[k][i] = arr[i][k];
    }
    else if (k == 0) {
      //arr.splice([i][k]);
      array[2][i] = arr[i][k];
    }
  }
}
console.log(arr);
console.log(array);
