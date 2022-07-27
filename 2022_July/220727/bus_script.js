
const socket = io.connect();
socket.on("reserve", (data) => {
    let $target = $("div[data-x ="+data.x+"][data-y ="+data.y+"]");

    $target.removeClass("enable");
    $target.addClass("disable");
});

// 초기 좌석 생성
$(window).ready(function(){
    const onClickSeat = function(){

        if($(this).hasClass("disable")){
            return;
        }
        let x = $(this).attr("data-x");
        let y = $(this).attr("data-y");
        if (confirm("이 좌석을 예매 하시나요?")){
            // yes를 눌렀을때
            socket.emit("reserve",{
                x, y
            });
        } else {
            //no를 눌렀을때
            alert("취소 되었습니다.");
        };
    };
    $.getJSON('/seats', {dummy : new Date().getTime()}, (data) => {
        $.each(data, (indexY, line) => {

            let $line = $("<div></div>").addClass("line");
            $.each(line, (indexX, seat) => {
                let $output = $("<div></div>", {
                    class : "seat",
                    "data-x" : indexX,
                    "data-y" : indexY,
                }).appendTo($line);

                if (seat == 1) {
                    // 비어있는 좌석
                    $output.addClass("enable").on("click", onClickSeat);
                } else if (seat == 2) {
                    // 예약된 좌석
                    $output.addClass("disable");
                }
            });
            $line.appendTo("body");
        });
    });
});
