/* 
1. 기능 모듈화
모듈이란?
여러 기능들에 관한 코드가 보여있는 하나의 파일

장점 : 기능 재사용의 편리성
*/

let Gnb = (
    function(){
        function Gnb(id){
            this.init(gnb);
            this.id = id;
        }
        // 프로토 타입 객체란?
        // 함수를 정의하면 다른 곳에 생성되는 프로토타입 객체는 여기서 Gnb가 다른 객체의 원형이되는 객체.
        // 모든 객체는 프로토타입 객테에 접근할 수 있다.
        // 복사로 생성된 모든 객체는 추가된 기능을 사용가능.

        // 프로토 타입은?
        // 자바스크립트에서 기본 데이터 타입을 제외한 모든것이 객체인데,
        // 객체가 만들어지기 위해서 자신을 만드는데 사용된 원형인 프로토 타입 객체를 이용해서 객체를 만든다.
        // 속성이 자신을 만들어낸 원형을 의미하는 프로토 타입 객체를 참조하는 링크가 있다.
        // 여기서 이 링크를 프로토 타입이라고 정의한다.
        Gnb.prototype.init = function(){

            // id="gnb" 또는 class="gnb" 가 있는지 확인
            if(gnb === "" || gnb === null){return};

            // 태그 생성 //
            // document.createElement('div') : div 태그 생성
            // div태그 생성한것을 temp선언하고 대입
            let temp = document.createElement('div');

            gnb.appendChild(temp);
        }

        // 자신의 id를 반환해주는 함수
        Gnb.prototype.setId = function(){
            return this.id;
        }
        return Gnb;
    }
)();

// 표 하나 만들어보기
// 프로토타입 객체로 ul li태그를 만들어보기
// 자신의 li 갯수 반환해주는 함수 작성해보기
// js 하나 만들어서 이름 정하고,