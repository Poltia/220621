/* sequelize 사용하기!
설치명령어
npm i sequelize
*/

// 폴더명까지만 경로를 작성해줬을땐 index.js를 기본으로 찾아온다.
const { sequelize, User } = require("./model")
const { sync } = require("./model/users");
const { Op } = require("sequelize"); // 검색 연산자 함수 사용을 위해서 불러온다.

// 처음에 연결할 때 테이블들의 값을 초기화 할 것인지 여부
// ture: 기존 테이블들을 초기화. false: 초기화 하지 않는다.
sequelize.sync({ force : false }).then(() => {
    console.log("연결 됨");
}).catch((err) => {
    console.log(err);
});
/*
// create : 생성 쿼리문
User.create({
    name : "Hi",
    age : 34,
    msg : "test"
});*/

// 조회 쿼리문
/* 검색할때 쓰는거
attributes : 원하는 컬럼만 가져온다
where : 검색 조건 설정
order : 생성 순서 정렬. DESC(내림차순), ASC(오름차순)
ex) order : [["age", "DESC"]]
limit : 조회할 갯수
offset : 스킵할 갯수
DESC, ASC 자주 사용함.
* 검색 연산자 함수
Op.gt (greater than, 초과),
Op.gte (greater than or equal to, 이상),
Op.lt (less than, 미만),
Op.lte (less than or equal to, 이하),
Op.ne (not equal, 같지 않음),
Op.or (or, 또는),
Op.in (in, 배열 요소 중 하나),
Op.notIn (not in, 배열 요소와 모두 다름) 등이 있다. */
async function select() {
    const user = await User.findAll({
        where : {
            age : {[Op.gt] : 23}, // age가 23초과만 가져옴
        },
    });
    const temp = user.map((i) => i.dataValues);
    console.log(temp);
}
//select();

// 수정 쿼리문
User.update({
    // msg 를 수정
    msg : "수정할 내용"
},
// 아이디가 1번인 항목을 찾아서
{where : {id:1}});

// 삭제 쿼리문
User.destroy({
    // id 가 1인 항목 삭제 파괴 파쇄
    where : {id : 1},
});

// 관게 쿼리문 join