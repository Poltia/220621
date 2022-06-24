
// UI 이벤트

// load  페이지와 기타 요소들의 로딩이 완료 됐을때
// on이 붙으면 어트리뷰트 방식
window.onload = function() {
    //로드가 완료되고 실행되는 함수
    console.log('페이지가 로드됨');
    console.log(document.querySelector(".tag"));
}

window.addEventListener('load',function() {
    //여기도 로드가 완료되고 실행되는 함수
    console.log('페이지가 로드됨');
})

//어트리뷰트를 사용하거나
//window.addEventListener('이벤트의 타입', 함수) 를 사용하여
//이벤트 핸들러에도 load 이벤트를 등록할 수 있다.


// resize  브라우저 창의 크기가 바뀌었을때
window.onresize = function() {
    console.log("페이지 사이즈가 변했다.");
}

window.addEventListener("resize",function() {
    console.log("페이지 사이즈가 변했다.2");
})


// scroll  사용자가 페이지를 스크롤했을 때
// window.scrollY  브라우저의 스크롤값, 맨위가 0
window.onscroll = function() {
    console.log(window.scrollY);
};

window.addEventListener("scroll",function() {
    console.log("스크롤중");
})




// 키보드 이벤트

//keydown  사용자가 키를 눌렀을 때(눌렀다 뗀게 아니라 누르자마자)
window.onkeydown = function() {
    console.log("키가 입력됨");
}

window.addEventListener("keydown",function() {
    console.log("keydown");
})


//keyup  사용자가 키를 누르고 뗐을때
window.onkeyup = function () {
    console.log("키를 뗐다");
}

window.addEventListener("keyup",function() {
    console.log("keyup");
})

// keypress  사용자가 키를 꾹 누르고 있는 동안
window.onkeypress = function() {
    console.log("키를 누르는중")
}

window.addEventListener("keypress",function() {
    console.log("keypress");
})



//마우스 이벤트
// click  사용자가 페이지위에서 해당 태그에 마우스를 클릭했을때
content.onclick = function() {
    console.log('클릭');
}

content.addEventListener("click", function() {
    console.log("click");
})


//dblclick  더블클릭 했을때 발동 되는 함수
content.ondblclick = function() {
    console.log('더블클릭');
}

content.addEventListener("dblclick",function(){
    console.log("double click");
})


// mousedown 마우스 버튼을 누르자 마자
content.onmousedown = function() {
    console.log("마우스 누름");
}

content.addEventListener('mousedown',function() {
    console.log('mousedown');
})


// mouseup  마우스버튼을 누르고 뗐을때
// 단일 함수 추가
content.onmouseup = function() {
    console.log("마우스 뗌");
}

//다수로 함수를 추가 할 수 있다.
content.addEventListener("mouseup",function() {
    console.log("mouseup");
})


// mousemove 마우스가 움직일때
window.onmousemove = function() {
    console.log('움직임');
}

window.addEventListener("mousemove",function() {
    console.log('mousemove');
})


//mouseenter  마우스를 해당 요소의 위로 올렸을떼
content.onmouseenter = function() {
    console.log('content에 마우스 올라옴');
}

content.addEventListener("mouseenter",function () {
    console.log('mouseenter in content');
})


// mouseleave  마우스가 해당 요소를 빠져나갔을때
content.onmouseleave = function() {
    console.log('content에서 마우스 나감');
}

content.addEventListener("mouseleave", function() {
    console.log('mouseleave out content');
})



// 모바일 터치
// touchstart  화면을 눌렀을때
window.ontouchstart = function() {
    console.log("touchstart");
}

// touchend  화면에서 손을 뗐을때
window.ontouchend = function() {
    console.log("touchend");
}

// touchmove  화면에서 터치로 이동할때
window.ontouchmove = function() {
    console.log("touchmove");
}



// 드래그 이벤트
// drag  드래그하고 있을때
window.ondrag = function() {};

// dragstart  드래그가 시작됐을때
window.ondragstart = function() {};

// dragend  드래그가 끝났을때
window.ondragend = function() {};

// dragenter  드래그하면서 요소 위로 마우스가 올라갔을때
window.ondragenter = function() {};

// dragleave  드래그하면서 요소 밖으로 마우스가 나갔을때
window.ondragleave = function() {};

// drop  드래그하다가 놓았을때
window.ondrop = function() {};




/* 실습
가위바위보
버튼 >> 스타트 버튼
게임 한번 돌리기
==================

가위바위보에서
버튼 >> 스타트버튼 눌러서 게임시작
가위바위보 버튼 만들기 */







