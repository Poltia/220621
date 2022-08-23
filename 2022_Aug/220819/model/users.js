
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
                    // 기본키. primaryKey
                    // 중복되지 않는 키
                    // 기본키는 컬럼에 하나는 무조건 있어야한다.
                    //primaryKey : true,
                    // 고유키. unique
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
                /*created_at : {
                    // DATE : 시간을 값으로 받음
                    type : _sequelize.DATE,
                    allowNull : false,
                    // 기본값 설정. NOW : 현재시간
                    defaultValue : _sequelize.NOW,
                }*/
            },
            {
                // sequelize >> 위에서 매개변수 쓴것을 연결 시켜주는 옵션
                sequelize,
                // 생성 및 수정 시간을 기록해준다. (생성:created_at, 수정:updated_at)
                timestamps : true,
                // underscored : 시퀄라이즈는 기본적으로 카멜표기법(ex.userData)을 사용하는데,
                                // 스네이크 표기법(ex.user_data)으로 바꿔주는 옵션
                underscored : false, // true>스네이크표기법, false>카멜표기법
                // 모델의 이름을 설정할 수 있다.
                modelName : "User", // 관계형으로 구성할때 사용한다.
                // 테이블의 이름을 설정
                tableName : "users",
                // paranoid : true일때 deletedAt이라는 컬럼이 만들어진다.
                // 컬럼값은 남아있고 deletedAt의 값에 삭제한 시간이 추가된다.
                paranoid : false,
                // charset, collate : 인코딩방식. 각각 아래처럼 설정해주면 한글입력이 가능하다.
                // 뒤에 mb4를 붙이면 이모티콘도 사용가능.
                charset : "utf8",
                collate : "utf8_general_ci"
            }
        );
    }
    // foreignkey 외부키
    static associate(db){
        // 1:N 관계 (hasMany, belongsTo)
        // 시퀄라이즈에서 1:N 관계를 hasMany()로 정의한다.
        // hasMany()를 이용해서 테이블의 관계를 정의해준다.
        // 첫번째 매개변수는 연결할 테이블
        // sourceKey는 User테이블안에 어떤 키를 foreignKey와 연결할지
        // hasMany()에서 첫번째로 넘겨준 테이블이 foreignKey와 연결되고 foreignKey 이름이 user_id 이다.
        db.User.hasMany(db.Post, { foreignKey:"user_id", sourceKey:"id" });
    }
}

module.exports = User;