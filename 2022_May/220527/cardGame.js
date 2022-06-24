/*
카드게임만들기
카드덱은 52장
카드 2장을 먼저 뽑는다.
베팅
한장더 뽑는다.
처음 두장 카드숫자 사이에 세번째 카드숫자가 들어가면 승리, 아니면 패배
===종료조건은 17판하거나 판돈을 다 잃거나
*/


let shape = {
    s1 : ["♠"],
    s2 : ["♥"],
    s3 : ["♣"],
    s4 : ["◆"],
}

for(i=1; i<=13; i++) {
    shape.s1.push(i);
    shape.s2.push(i);
    shape.s3.push(i);
    shape.s4.push(i);
}

/*
let deck = ["♠1","♠2","♠3","♠4","♠5","♠6","♠7","♠8","♠9","♠10","♠11","♠12","♠13",
    "♥1","♥2","♥3","♥4","♥5","♥6","♥7","♥8","♥9","♥10","♥11","♥12","♥13",
    "♣1","♣2","♣3","♣4","♣5","♣6","♣7","♣8","♣9","♣10","♣11","♣12","♣13",
    "◆1","◆2","◆3","◆4","◆5","◆6","◆7","◆8","◆9","◆10","◆11","◆12","◆13"];
*/



let money = 10000;
let bet;

for(j = 0; j < 17; j++) {
    console.log("==============================");
    console.log(j+1,"번째판");
    console.log("현재소지금 : ",money);
    let pick = {
        pc : [],
        user : [],
    };
    // 2+1장 뽑기

    while(true) {
        let p = Math.floor(Math.random()*13+1);
        let k = Math.floor(Math.random()*4);

        if (k == 0) s = shape.s1;
        else if (k == 1) s = shape.s2;
        else if (k == 2) s = shape.s3;
        else s = shape.s4;

        if (s[p]==0) {
            continue;
        }
        else if (pick.pc.length==2) {
            bet = Number(prompt("배팅액을 입력하세요."));
            pick.user.push(s[p]);
            console.log("베팅금은 : ",bet);
            console.log("카드는");
            console.log(s[p],s[0]);
            s.splice(p,1,0);
            break;
        }
        pick.pc.push(s[p]);
        console.log(s[p],s[0]);
        s.splice(p,1,0);
    }
    //비교 하기
    let check = {
        p : pick.pc[0],
        p1 : pick.pc[1],
        u : pick.user[0],
    }
    if (check.u<check.p1 && check.u>check.p) {
        console.log("win");
        money = money+bet*5;
        console.log("남은 돈 : ",money);
    }
    else if (check.u>check.p1 && check.u<check.p) {
        console.log("win");
        money = money+bet*5;
        console.log("남은 돈 : ",money);
    }
    else {
        console.log("defeat");
        money = money-bet;
        console.log("남은 돈 : ",money);
    }

    if (money <= 0) break;
//확인용===================
    console.log(shape.s1);
    console.log(shape.s2);
    console.log(shape.s3);
    console.log(shape.s4);
//========================
}

