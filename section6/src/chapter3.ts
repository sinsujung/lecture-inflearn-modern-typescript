/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

// 인터페이스 구현 시 public 접근제어자만 사용가능 private으로는 추가 프로퍼티 사용할 때 사용함
class Character implements CharacterInterface {

    constructor(
        public name: string, 
        public moveSpeed: number,
        private extra: string
    ) {
        this.name = name;
        this.moveSpeed = moveSpeed;
    }

    move(): void {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}