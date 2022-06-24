
function one(){
    console.log("첫번째");
}

function two(){
    console.log("두번째");
}

function three(){
    console.log("세번째");
}

// 순서 첫번째가 2초뒤에 나오고
//두번째, 세번째가 먼저나옴.........


function use(data){
    //Promise 동적으로 생성
    return new Promise(function(res, rej){
        //setTimeout 실행하고 1초뒤에
        setTimeout(() => {
            if(data === 1){
                res();
            }
            else if(data === -1){
                rej();
            }
        }, 1000);
    })
}
//resolve 는 then 으로 감
use(1).then(function(){
    // then 결과 까지 기다렸다가 아래 실행
    console.log("난 res")
    //console 첫번째
    one();
    // two() 실행
    two();
    //three() 실행
    three();
//reject는 catch로 감
}).catch(function(){ 
    console.log("난 rej");
})

