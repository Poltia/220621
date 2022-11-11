// TypeScript 제네릭
declare type Result<R> = { isError: false; value: R };
declare type Failure<E> = { isError: true; value: E };
declare type Failable<R, E> = Result<R> | Failure<E>;
// 선언 시점이 아니라 생성시점에 타입을 명시해서 하나의 타입이 아닌 다양한 타입을 사용할 수 있는 기법이다.

/* 사용하는 이유
한번의 선언으로 다양한 타입에 재사용이 가능하다는 장점
제네릭을 사용하지 않으면 불필요한 타입 변환을 하기 때문에 프로그램의 성능 향상에 도움이 된다.

제네릭을 쓰지 않으면 타입을 미리 지정하거나 any를 사용하면 되는데
타입을 미리 지정해버리면 정해진 타입을 써야하고 any를 사용하면 자료타입을 제한 할 수도 없다.
어떤 데이터 타입이 반환되는지 알 수 없다. */

// EXAMPLE ////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// type A<T> = { value: T };
// // 생성을 할 때 T에 타입을 전달해주면 그 타입으로 value의 타입이 정해진다.
// typeC<T, S> = { value: T | S };

// function B(): A<String> {
//     return { value: "stringstring"}
// }
// B라는 함수가 있고 제네릭을 사용해서 T에 String 타입을 전달했고
// A<T> 라는 타입을 반환하는 함수는 B
// 리턴 값은 객체 안에 키값은 value에 value의 타입은 String

// function D(): C<string, number> {
//     if (true) {
//         return { value: "stringstring" };
//     } else {
//         return { valuse: 123456 };
//     }
// }
// D라는 함수가 있고 제네릭을 사용해서 S<T, S>의 T와 S가 생성정까지 정해지지 않은 타입
// 그래서 함수의 반환타입으로 생성할 때 T에 String, S에 number 타입을 전달하고 생성 해줌으로
// 함수가 반환하는 타입이 두가지가 될 수 있다.
// 객체 안에 있는 value의 타입이 문자 타입과 숫자 타입 두가지 타입을 가지고 반환 할 수 있다.

///////////////////////////////////////////////////////////////////////////