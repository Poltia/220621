
let myName = "종화";

function names(call) {
    let yourName = [];
    for (i=0; i<3; i++){
        yourName.push(prompt("이름을 입력해주세요"));
    }
    call(yourName);
}

function callBack(name) {
    console.log(myName+","+name);
}

names(callBack);

/*
let myName = "종화";

function names(a) {
    let yourName = [];
    for (i=0; i<3; i++){
        yourName.push(prompt("이름을 입력해주세요"));
    }
    a(yourName);
}

function b(c) {
    console.log(myName+","+c);
}

names(b);
*/