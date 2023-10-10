/* 부모 class */
class Gun {
  // 원본 함수
  constructor(public name: string) {}

  // 원본 함수
  shot(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("빵야!!!");
    }
  }
}

/* 부모를 상속한 자식 class */
class RailGun extends Gun {
  constructor(public name: string) {
    super(name);
  }

  shot(times2: number) {
    super.shot(times2);
    for (let i = 0; i < times2; i++) {
      console.log("삐융~!!!");
    }
  }
}

let railgun = new RailGun("플라즈마");
railgun.shot(3);
