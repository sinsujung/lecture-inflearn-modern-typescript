/**
 * 접근 제어자
 * access modifier
 * => public private proteced
 */

class Employee {
    // 필드

    // 앞에 아무것도 안붙이면 기본적으로 public(공공의: 접근제한이 없음)
    // private(사적인): 클래스 내부에서만 사용 가능(파생클래스에서도 사용 불가)
    // 파생클래스에서 사용 가능 하게 하고 싶으면 protected 사용
    private name: string;
    protected age: number;
    position: string;

    // 생성자
    constructor(name: string, age:number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log("일함");
    }
}

class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber: number;

    // 생성자
    // 생성자 매개변수 내에서도 접근제어자 설정 가능
    // But 생성자에 접근제어자를 달면 이를 가지고 필드를 자동으로 만들기 때문에 필드 정의 생략, this.xxx = xxx 부분도 생략 가능
    constructor(
        name: string, 
        age: number, 
        position: string, 
        officeNumber: number
    ) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }

    // 메서드
    func() {
        this.age;
        // this.name;
    }
}

const employee = new Employee("신수정", 27, "developer");
// employee.name = "홍길동";
// employee.age = 30;
employee.position = "디자이너";
