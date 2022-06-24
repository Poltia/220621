
let user_money = 10000;
let computer_money = 10000;

let end = 1;
while (end<=10) {
let bet = Number(prompt("베팅금을 정하세요"))
let user_choise = prompt("가위, 바위, 보 중 하나를 입력하세요");
let compter_choise = Math.floor(Math.random()*3);
if (compter_choise == 0){
    console.log("컴퓨터는 가위를 냈습니다.");
    switch (user_choise) {
        case "가위":
            console.log("비겼습니다.");
            user_money = user_money - bet;
            computer_money = computer_money - bet;
            console.log("유저", user_money);
            console.log("PC", computer_money);
            break;
        case "바위":
            console.log("이겼습니다.");
            user_money = user_money + bet * 2;
            computer_money = computer_money - bet * 2;
            console.log("유저", user_money);
            console.log("PC", computer_money);
            break;
        case "보":
            console.log("졌습니다.");
            user_money = user_money - bet * 2;
            computer_money = computer_money + bet * 2;
            console.log("유저", user_money);
            console.log("PC", computer_money);
            break;
        default:
            console.log("입력을 확인해주세요.");
            break;
       }
}
else if (compter_choise == 1){
    console.log("컴퓨터는 바위를 냈습니다.");
    switch (user_choise) {
        case "가위":
            console.log("졌습니다.");
            user_money = user_money - bet *2;
            computer_money = computer_money + bet * 2;
            console.log("유저", user_money);
            console.log("PC", computer_money);
            break;
        case "바위":
            console.log("비겼습니다..");
            user_money = user_money - bet;
            computer_money = computer_money - bet;
            console.log("유저", user_money);
            console.log("PC", computer_money);
            break;
        case "보":
            console.log("이겼습니다.");
            user_money = user_money + bet * 2;
            computer_money = computer_money - bet * 2;
            console.log("유저", user_money);
            console.log("PC", computer_money);
            break;
        default:
            console.log("입력을 확인해주세요.");
            break;
       }
}
else if (compter_choise == 2){
    console.log("컴퓨터는 보를 냈습니다.");
    switch (user_choise) {
        case "가위":
            console.log("이겼습니다.");
            user_money = user_money + bet * 2;
            computer_money = computer_money - bet * 2;
            console.log("유저", user_money);
            console.log("PC", computer_money);
            break;
        case "바위":
            console.log("졌습니다.");
            user_money = user_money - bet * 2;
            computer_money = computer_money + bet * 2;
            console.log("유저", user_money);
            console.log("PC", computer_money);
            break;
        case "보":
            console.log("비겼습니다.");
            user_money = user_money - bet;
            computer_money = computer_money - bet;
            console.log("유저", user_money);
            console.log("PC", computer_money);
            break;
        default:
            console.log("입력을 확인해주세요.");
            break;
       }
}
else{
    console.log("입력을 확인해주세요.");
}
let taken = Math.floor(Math.random()*10);
    if(taken == 1) {
        user_money = user_money + bet * 1.5;
        console.log("구경꾼이", bet*1.5, "를 줬습니다.땡큐");
    }
    console.log(end,"번째판");
    if(end == 10) break;
    if(user_money<=0 || computer_money<=0) break;
    end++;
}
if (user_money <= 0) {
    console.log("결과는")
    console.log("유저", user_money);
    console.log("PC",computer_money);
    console.log("파산입니다.");
}
else if (computer_money <=0) {
    console.log("결과는")
    console.log("유저", user_money);
    console.log("PC",computer_money);
    console.log("이겼습니다.");
}
else if (end == 10) {
    console.log("결과는")
    console.log("유저", user_money);
    console.log("PC",computer_money);
    console.log("수고하셨습니다.");
}