
//json 파일을 데이터처럼 가져와 보기
//이제 데이터를 저장된 것을 가져와보기보기보기보기보기
/*
function loadJson(){

    //fetch 경로에 데이터를 요청한다. 기본적으로 method는
    //get(가져온다 읽기)방식과 post(참조도 되고 쓰기 및 수정도 가능)
    //fetch는 비동기 요청 방식이다.
return fetch("1json.json")//"파일경로"

    //요청을 하는데 json 방식으로 받는다.
    .then((res)=>res.json())

    //player키값의 객체를 가져옴
    .then((json) => json.player1)

    // catch 실패했을때
    .catch((rej)=>{
        console.log("Die");
    });
}

loadJson().then((user) => {
    console.log(user);
});
*/

function loadJson(){

    //fetch 경로에 데이터를 요청한다. 기본적으로 method는
    //get(가져온다 읽기)방식과 post(참조도 되고 쓰기 및 수정도 가능)
    //fetch는 비동기 요청 방식이다.
return fetch("1json.json")//"파일경로"

    //요청을 하는데 json 방식으로 받는다.
    .then((a)=>a.json())

    //player키값의 객체를 가져옴
    .then((b)=>b.player1)

    // catch 실패했을때
    .catch((rej)=>{
        console.log("Die");
    });
}

loadJson().then((c) => {
    console.log(c);
});

