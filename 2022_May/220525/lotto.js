
let lottoNumber = [];
let res = [];

//1~45 숫자를 만듬
for(let i = 1; i <=45; i++ ) {
    lottoNumber.push(i);
}

for(let i = 0; i <= 5; i++) {
    //pick을 0~44-i 로 설정
    let pick = Math.floor(Math.random()*(45-i));
    //res안에 lottoNumber의 pick번째 번호를 넣는다.
    res.push(lottoNumber[pick]);
    //lottoNumber안에있는 pipck번째 번호부터 1번째 번호를 삭제
    lottoNumber.splice(pick,1);
}

console.log(lottoNumber);
console.log(res);





/*
let LottoNumber = [];
while(LottoNumber.length<47) {
    let num = Math.floor(Math.random()*45)+1
    if(LottoNumber.indexOf(num)<0) {
        LottoNumber.push(num)
    }
}
console.log(LottoNumber)
*/