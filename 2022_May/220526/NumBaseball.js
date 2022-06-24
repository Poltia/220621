
let pcDeck = [0,1,2,3,4,5,6,7,8,9];


let pcPick = [];

for(i = 0; i < 3; i++) {
    let pick = Math.floor(Math.random()*(10-i));
    pcPick.push(pcDeck[pick]);
    pcDeck.splice(pick,1);
} //pcPick 3개 뽑기

for(i=0; i<10; i++){
    let userPick = [];
    let ball = [];
    let strike = [];
    let out = [];

    console.log(i+1,"번째 판");

    for(k=0; k<3; k++) {
        let pick = Number(prompt("0~9까지 숫자를 입력하세요"));
        if(pcPick.indexOf(pick)==k) {
            strike.push("strike");
        }
        else if(pcPick.indexOf(pick)>=0) {
            ball.push("ball");
        }
        else if(pick<0 || pick>9) {
            alert(k+1+"번째 숫자 무효");
            out.push("out");
        }
        else {
            out.push("out");
        }
        userPick.push(pick);
    }
    console.log(userPick);
    console.log(pcPick);
    console.log("Strike : ",strike.length);
    console.log("Ball : ", ball.length);
    if(out.length == 3) {
        console.log("OUT");
    }
    if(strike.length == 3) {
        console.log("맞았습니다!")
        break;
    }
}
console.log("pc pick : ", pcPick);
console.log("돈걸고 다시한번 하세요.")