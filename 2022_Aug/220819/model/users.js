
const _sequelize = require("sequelize");

// User 클래스에서 시퀄라이즈 안에있는 모듈 객체의 기능을 상속시켜주기위해서
// User 클래스에서 _sequelizq.Model 기능을 준다.
class User extends _sequelize.Model {
    // static init 메서드에서 테이블을 생성해준다.
    // 사용하면 생성 및 연결(매핑)까지 구성
    static init(sequelize){
        // super >> 상속받은 함수를 쓰기위해 사용!
        // init()의 첫번째 매개변수는 테이블의 구성(컬럼의 종류, 타입, 속성)
        // 두번째 매개변수는 테이블 자체에 대한 설정값을 객체로 전달
        /* 테이블 데이터 타입
        https://pjt3591oo.github.io/sequelizejs_translate/build/html/CoreConcepts/DateTypes.html */
        return super.init(
            {
                // name 컬럼
                name : {
                    // 시퀄라이즈 모델 안에있는 데이터타입을 사용해야한다!!
                    // 그래서 가져온 시퀄라이즈 모듈 안에 있는 STRING 객체를 사용
                    type : _sequelize.STRING(20), // 컬럼의 데이터 타입
                    // Null 을 허용하는지 여부 (빈값이어도 되는지 여부).
                    allowNull : false,
                    // 기본키
                    // 중복되지 않는 키
                    // 기본키는 컬럼에 하나는 무조건 있어야한다.
                    //primaryKey : true,
                    // 고유키
                    // 여기서는 컬럼의 name값이 중복되지 않게.
                    // 없어도 상관 없다.
                    // ex)주민번호나 전화번호 같이 겹치지 않는 값들
                    unique : true,
                },
                // age 컬럼
                age : {
                    // INTEGER : 숫자로 값을 받음.
                    type : _sequelize.INTEGER,
                    allowNull : false,
                },
                msg : {
                    // TEXT : 문자로 값을 받음.
                    type : _sequelize.TEXT,
                    allowNull : true,
                },
                // 생성시간이 필요하면, 아래 구문이나 테이블자체 설정에 timestamps : true 설정을 하면 된다.
                created_at : {
                    // DATE : 시간을 값으로 받음
                    type : _sequelize.DATE,
                    allowNull : false,
                    // 기본값 설정. NOW : 현재시간
                    defaultValue : _sequelize.NOW,
                }
            },
            {
                // 생성 및 수정 시간을 기록해준다. (생성:created_at, 수정:updated_at)
                timestamps : true,
            }
        )
    }
}