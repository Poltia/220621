
/*과제
버튼을 두개 만든다.
더하기 빼기를 누르면 나와있는 h1 글자에 플러스 1 마이너스1 하게 만든다.
*/
// 
// - 이벤트 전달에 따른 방법 -
let number = 0;


function increase(t){
    console.log(t.innerHTML);
    switch(t.innerHTML){
        case "더하기" :
        (++number)
        break;
        case "빼기" :
        (--number)
        break;
    }
    updateDisplay(number);
}

function updateDisplay(number){
   document.getElementById("number").innerHTML = number;
}
