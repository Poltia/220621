//이벤트 함수의 타겟

window.onclick = function(event) {

    // event.target은 이벤트가 발생한 요소
    // event 태그의 이벤트가 담겨있다.
    console.log(event.target);
    
    //클래스가 무엇인지로 판단을 해서 이벤트를 적용할 수 있다.
    if(event.target.classList.contains("_target")) {
        console.log('있다');
    }

        // 클래스가 무엇인지 가져와서
        // 조건문으로 이벤트를 설정해 줄 수 있다.
    let _class = event.target.className;
    switch (_class) {
        case "_target":
            break;

        default:
            break;

    }
}


// 마우스의 현재 페이지에서의 위치

// onmousemove  마우스가 움직일때
window.onmousemove = function(e) {

    // e.type  해당 이벤트의 타입이 무엇인지
    console.log(e.type);
    // e.pageX  문서 페이지 상에서 마우스의 X좌표
    console.log(e.pageX);
    // e.pageY  문서 페이지 상에서 마우스의 Y좌표
    console.log(e.pageY);
}


// 키보드 입력 이벤트
_input.onkeydown = function(e) {
    // _input 여기에 이벤트는 KeyboardEvent
    // e.keyCode  ascii코드 숫자로 보이고 영문키 각 엔터 컨트롤 알트 그리고 숫자 입력시 표기
    // 한글입력시 229만 뜬다
    console.log(e.keyCode);
}


// 기본 동작을 취소하는 방법

_btn.onclick = function(e) {
    e.preventDefault();  // 기본 동작을 취소하는 함수
    
    // 버블링 현상을 막는 방법(이벤트전파)
    e.stopPropagetion(); // 이벤트의 전파를 막는 함수
}