
class Monster{
    constructor(name) {
        this.name = name;
        this.attack = 0;
        this.defence = 0;
        this.speed = 0;
    }
    att(attack) {
        this.attack = attack;
        console.log(this.name+"의 공격력은 "+this.attack);
    }
    def(defence) {
        this.defence = defence;
        console.log(this.name+"의 방어력은 "+this.defence);
    }
    move(speed) {
        this.speed = speed;
        console.log(this.name+"의 속도는 "+this.speed);
    }
}
let mob = new Monster("잡몹");
mob.att(40);
mob.def(20);
mob.move(5);

class Boss extends Monster{
    magic(spell) {
        this.spell = spell;
        console.log(this.name+"의 마법공격력은 "+this.spell);
    }
}
let boss = new Boss("보스");
boss.att(100);
boss.magic(90);
boss.def(50);
boss.move(10);
