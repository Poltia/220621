
// 표 하나 만들어보기
// 프로토타입 객체로 ul li태그를 만들어보기
// 자신의 li 갯수 반환해주는 함수 작성해보기
// js 하나 만들어서 이름 정하고,

let makeList = (
    function(){
        function makeList(list_Qnt){
            this.list_Qnt = list_Qnt;
            this.init(gnb);
        }
        makeList.prototype.init = function(){
            if(gnb === "" || gnb === null) {return}

            //create Tags//
            let temp = document.createElement("ul");
            temp.className = "_ul";
            gnb.appendChild(temp);
            
            let _ul = document.querySelector("._ul");

            for(i = 0; i < this.list_Qnt; i++) {
                let temp_ = document.createElement("li");
                _ul.appendChild(temp_);
            }
        }
        makeList.prototype.list_count = function() {
            return this.list_Qnt;
        }
        return makeList;
    }
)()