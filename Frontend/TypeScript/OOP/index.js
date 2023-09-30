"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    // @Override Animal
    constructor(name) {
        super(name);
        this.leg = 0;
    }
    // @Override Animal
    move(distanceInMeters = 5) {
        // 오버라이드 되서 굳이 또 매개변수 타입을 선언 할 필요 없다.
        super.move(distanceInMeters);
    }
    poison() {
        console.log("shoot poison !!");
    }
}
class Horse extends Animal {
    // @Override Animal
    constructor(name) {
        super(name);
        this.leg = 4;
    }
    run() {
        console.log("start Run !!");
    }
}
let tom = new Horse("Tommy the Palomino");
console.log(tom.leg); // Animal 형식에 leg 속성이 없습니다
tom.move(34); // 'tommy the palomino moved 34m'
tom.run(); // Animal 형식에 run 속성이 없습니다
