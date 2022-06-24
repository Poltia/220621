let art = prompt("미술점수를 입력하세요","70");
let music = prompt("음악점수를 입력하세요","80");
let PT = prompt("체육점수를 입력하세요","90");
let korean = prompt("국어점수를 입력하세요","100");

art = Number(art);
music = Number(music);
PT = Number(PT);
korean = Number(korean);

let Total = art + music + PT + korean;
let average = Total/4
console.log("네 과목의 평균점수는", average ,"입니다.");

if(average>=70 && average<80){
    console.log("따라서 C학점 입니다.")
}
else if(average>=80 && average<90){
    console.log("따라서 B학점 입니다.")
}
else if(average>=90 && average<=100){
    console.log("따라서 A학점 입니다.")
}
else if(average<70){
    console.log("따라서 낙제입니다. 열공하세요")
}
else{
    console.log("입력 똑바로 하세요")
}