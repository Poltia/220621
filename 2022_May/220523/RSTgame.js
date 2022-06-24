

let user_choise = prompt("가위, 바위, 보 중 하나를 입력하세요");

if (user_choise == "r"){
    user_choise = "바위";
}
if (user_choise == "s"){
    user_choise = "가위";
}
if (user_choise == "p"){
    user_choise = "보";
}

let compter_choise = Math.floor(Math.random()*3);

if (compter_choise == 0){
    console.log("컴퓨터는 가위를 냈습니다.");
    switch (user_choise) {
        case "가위":
            console.log("비겼습니다.");
            break;
        case "바위":
            console.log("이겼습니다.");
            break;
        case "보":
            console.log("졌습니다.");
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
            break;
        case "바위":
            console.log("비겼습니다..");
            break;
        case "보":
            console.log("이겼습니다.");
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
            break;
        case "바위":
            console.log("졌습니다.");
            break;
        case "보":
            console.log("비겼습니다.");
            break;
        default:
            console.log("입력을 확인해주세요.");
            break;
       }
}
else{
    console.log("입력을 확인해주세요.");
}
