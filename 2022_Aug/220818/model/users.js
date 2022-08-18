const Sequelize = require("sequelize");

// sequelize 모듈을 확장한 user클래스
class User extends Sequelize.Model {
    // init()에서 테이블을 설정해준다.
    static init(sequelize) {
        // super.ini()의 첫번째 매개변수는 테이블 컬럼에 대한 설정, 두번째는 테이블 자체의 설정
        return super.init({
            name : {
                type : Sequelize.STRING(50),
                // Null을 허용하지 않음.
                allowNull : false,
                // 고유키. 값이 중복되지않고, 중복되면 안되는 값들을 쓸 때 사용한다.
                // 반드시 입력할 필요는 없다.
                unique : true,
                /* primarykey
                기본키
                값이 중복되지 않고, 반드시 입력해야하는 값 */
            },
            age : {
                type : Sequelize.INTEGER,
                allowNull : false,
            },
            msg : {
                type : Sequelize.TEXT,
                allowNull : true
            }
        }, /* 여기부터 테이블에 대한 설정 */ {
            // sequelize : init()의 매개변수를 연결시켜주는 옵션
            sequelize,
            // timestamp : true로 하면 createdAt과 updatedAt을 추가해주고
            // 생성시간과 수정시간을 자동으로 입력해준다.
            timestamps : true,
            // underscored : 시퀄라이즈는 테이블명과 컬럼명을 카멜표기법으로 표시해주는데
            // 스네이크 표기법으로 바꿔주는 옵션
            underscored : false,
            // modelName : 모델의 이름을 설정할 수 있다.
            modelName : "User",
            // tableName : 실제로 데이터베이스에 등록되는 이름. 보통 모델의 소문자로 바꿔주고 복수형으로 만들어준다.
            tableName : "users",
            // paranoid : true 로 설정하면 deletedAt 이라는 컬럼도 추가된다.
            // 컬럼을 삭제하면 지워지지않고 삭제한 시간이 표기된다. 검색시에도 찾지 않는다.
            // 삭제했을때 값을 남겨둬야할때. 복원해야하는 값일 경우 사용한다.
            paranoid : false,
            // charset, collate : 각각 아래 처럼 입력해야 한글 입력이 가능하다. (이모티콘도 사용하려면 utf8md4, utf8md4_general_ci)
            charset : "utf8",
            collate : "utf8_general_ci"
        }
        );
    }
    // associate()에서 다른 모델과 관계를 적어준다.
    // mysql JOIN이라는 기능으로 여러 테이블 간의 관게를 만들어준다.
    // 시퀄라이즈는 테이블간의 관계성만 알려주면 JOIN기능도 알아서 구현한다.
    static associate(db) {

    }
}

module.exports = User;