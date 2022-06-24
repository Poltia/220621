//컴퓨터의 스코어
let computerScore = 0;
//플레이어의 스코어
let userScore = 0;

let turn = false;

//게임 횟수
let gameCount = 10;

computer.disabled = true;
function userShoot(){
    //turn이 true면 return문으로 함수종료
    if(turn) return;
    let shootType = Math.random() < 0.5 ? 2 : 3;
    if(shootType === 2) {
        if(Math.random() < 0.7) {
            console.log('player : 2 points');
            userScoreUpdate(shootType)
        }
        else {
            console.log('player : No goal 2');
        }
    }
    else {
        if(Math.random() < 0.33) {
            console.log('player : 3 points');
            userScoreUpdate(shootType);
        }
        else {
            console.log('player : No goal 3');
        }
    }
    textUpdate('Computer');
    //다 동작하고나면 turn을 true로
    turn = true;
}
function computerShoot(){
    //turn이 false면 return문으로 함수 종료
    if (!turn) return;
    let shootType = Math.random() < 0.5 ? 2 : 3;
    if(shootType === 2) {
        if(Math.random() < 0.7) {
            console.log('com : 2 points');
            computerScoreUpdate(shootType)
        }
        else {
            console.log('com : No goal 2');
        }
    }
    else {
        if(Math.random() < 0.33) {
            console.log('com : 3 points');
            computerScoreUpdate(shootType);
        }
        else {
            console.log('com : No goal 3');
        }
    }
    textUpdate('Player');
    gameCounter();
    turn = false;
}

//id는 고유, 하나만 존재하기 때문에...(아래주석처럼 안해도댐)
//console.log(user);
//console.log(document.querySelector('#user'));

//user.addEventListener()
//document.querySelector('#user').addEventListener()
//document.querySelector("요소의 클래스나 아이디, 또는 어트리뷰트 선택자") 요소 선택자

//addEventListener 첫 매개변수는 이벤트 타입을 문자열로, 두번째 매개변수는 이벤트 작동시 실행할 함수
//실행할 함수
user.addEventListener("click",function(){
    //user를 click 하면 실행되는곳
    //userShoot 함수실행
    userShoot();
})
computer.addEventListener("click",function(){
    //computer를 click 하면 실행되는곳
    //computerShoot 함수실행
    computerShoot();
})

function userScoreUpdate(addScore){
    //userScore에 addScore를 더한다.
    userScore += addScore;
    console.log(userScore);
    document.querySelector('.player-score').innerHTML = userScore;
}
function computerScoreUpdate(addScore){
    //computerScore에 addScore를 더한다.
    computerScore += addScore;
    console.log(computerScore);
    document.querySelector('.computer-score').innerHTML = computerScore;
}

//text를 갱신 하는 함수
function textUpdate(name) {
    text.innerHTML = `${name} turn`;
    switch (name) {
        case "Player":
            computer.disabled = true;
            user.disabled = false;
            break;
        case "Computer":
            computer.disabled = false;
            user.disabled = true;
            break;    
        default:
            break;
    }
}

function gameCounter() {
    gameCount--; //게임 카운트 감소
    shots.innerHTML = gameCount;
    if(gameCount == 0) {
        //게임의 승패 보여주기
        if(computerScore > userScore) {
            text.innerHTML = "Computer WIN";
        }
        else if (computerScore < userScore) {
            text.innerHTML = "Player WIN";
        }
        else {
            text.innerHTML = "DRAW";
        }
        computer.disabled = true;
        user.disabled = true;
    }
}

