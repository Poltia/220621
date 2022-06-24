class Mother{
    constructor(name, age){
        this.name= name;
        this.age= age;
    }
    getInfo(){
        return console.log("내이름은 "+this.name+"이고 나이는 "+this.age)
    }

}
let a = new Mother("바보",20)
a.getInfo();


// extends 키워드를 사용해서 상속받을 수 있다.
// 자식클래스가 부모클래스를 상속받아서 부모클래스의 기능을 사용할 수 있다.
// 기존에 존재하던 기능을 토대로 새로운 기능을 확장시켜서 만들 수 있다.
class Child extends Mother{
//     constructor(a){
//         super(name);
//         this.name= a;
//     }
}
let b = new Child("나는 자식",30);
b.getInfo();

class Animal{
    constructor(name){
        this.name=name;
        this.speed=0;
    }
    run(speed){
        this.speed+=speed;
        console.log(this.name+"은"+this.speed+"로 달린다.","나는 부모다");
    }
    stop(){
        this.speed=0;
        console.log(this.name+"가 멈췄다.");
    }
}
let ani= new Animal("동물");
    ani.run(5);
    ani.stop();


    
    class Cat extends Animal{
        
        //생성자가 없음
        //constructor가 없는 경우 비어있는 생성자가 자동으로 만들어진다.(눈에 보이지는 않음)
        
        
        //run함수가 없으면 Animal의 상속받은 run함수를 실행 시킨다.
        //부모의 함수를 받아서 재정의 해서 사용(함수 오버라이딩)
        // run(speed){
            //     this.speed=speed;
            //     console.log(this.name+"은"+this.speed+"로 달린다","나는 자식이다");
            
            // }
    speak(){
        console.log("야옹야옹");
    }
    
    stop(){
        //this 의 speak를 부름
        // this.speak();
        
        // super는 상속 관계에서의 부모 재정의 해서 사용할 수도 있지만
        // super(상속받은 부모클래서 키워드)를 이용해 부모 함수를 실행할 수 있다.
        super.stop(); 
    }
}
let cat= new Cat("고양이");
//함수 오버라이딩? 
// 현재 자식 생성자에 run이 없기 때문에 부모의 run이 출력됨
cat.run(2);
cat.stop();

class Human{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
}
//class Man은 extends상속 받다 Human에게
class Man extends Human{
    //아래 생성자 처럼 생성자를 정의하면 오류가 난다.
    // 상속을 받는 클래스에 서는 반드시 부모클래스를 호출해야 하는데
    // super를 호출해줘야함
    // 일반적인 함수에서는 new 키워드와 함께 실행되면 빈객체가 만들어지고
    //this 키워드에 이 객체를 할당한다.
    // 반면 상속클래스(Man)의 생성자 함수가 실행되면 일반함수에서 일어나는 일이
    //일어나지 않는다. 왜냐하면 this에 객체를 할당하는 일을 부모클래스의 생성자가
    // 처리해주길 바라기 때문임
    constructor(name,age){
        super(name,age);
        this.name=name;
        this.age=age;
    }
}
let ma = new Man("경일",30);
console.log(ma);

//============================================

function func(){
    console.log("하이");
}
func();

// window 최상위 객체 모든것을 다 품고 있음 
window.func();
console.log(func()===window.func());

// this : c++에서는 멤버함수가 속한 클래스를 가르키는 포인터 
// js 에서의 this는 실행 컨텍스트가 생성될때 결정이 되고 실행 컨텍스트는
//함수를 호출할때 생성되므로 this는 함수가 호출될때 결정된다.(호출하는 방법에 따라 틀림) 

var abc =5;
console.log(abc)
console.log(window.a);
console.log(this.a);

function f(){
    if(window===this){
        console.log("윈도우는 this");
    }
}
f();

var student = {
    name :"hong",
    st:function(){
        console.log(this);
    }
}
student.st();

//전역공간에 있으므로 실행 주체는 window 객체가 되기 때문에
// 아래의 this는 전역객체인 window가 나오게 된다.
var s = student.st;
s();
/*
지금해볼것

 부모클래스(Monster)를 만든 다음에
 부모클래스를 상속으로 받는다.
 하위클래스(Boss 등등.. )만든다
 부모클래스는 공격,방어 걸어가기 등등을 가지고 있고
 하위클래스는 위에 해당하는 기능을 재정의 한다.
 */


class Monster{
    constructor(name){
        this.name=name;
        this.power=0;
        this.run=0;
        this.armor=0;
    }
    attack(power){
        this.power+=power;
        console.log(this.name+"은"+this.power+"의 공격력으로 때린다.");
    }
    speed(run){
        this.run=run;
        console.log(this.name+"는"+this.run+"의 속력으로 달린다.");
    }
    defense(armor){
        this.armor=armor;
        console.log(this.name+"는"+this.armor+"의 방어력을 가지고 있다.");
    }
}
class boss extends Monster{
    constructor(name){
        super(name,power,run,armor);
        this.name=name
        this.power= power
        this.run= run
        this.armor= armor
    }
    
}
let mon = new Monster("보스몬스터");
    mon.attack(10);
    mon.speed(20);
    mon.defense(50);
let mon2 = new Monster("보스몬스터2");
    mon2.attack(30);
    mon2.speed(40);
    mon2.defense(60);
