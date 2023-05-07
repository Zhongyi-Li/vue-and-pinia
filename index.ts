class DateUtil {
  static dateUtil = new DateUtil();
  static getInstance() {
    if (!this.dateUtil) {
      this.dateUtil = new DateUtil();
    }
    return this.dateUtil;
  }

  private constructor() {
    console.log("被创建了");
  }

  formatDate() {}
}

// const r1 = DateUtil.getInstance();
// const r2 = DateUtil.getInstance();

const r1 = DateUtil.dateUtil;
const r2 = DateUtil.dateUtil;
console.log(r1 === r2);

class PersonInfo {
  age_!: number;
  name: string;
  addrrss: string;
  constructor(address) {
    this.addrrss = address;
  }

  set age(val: number) {
    if (val <= 100) {
      this.age_ = val;
    } else {
      //   throw new Error("The age is over 100");
    }
  }
}

const xiaom = new PersonInfo("HangZhou");
xiaom.age = 1001;
console.log("xiaom:", xiaom);

class animal {
  constructor() {
    console.log("Animal");
  }
}

class Dog extends animal {
  constructor() {
    super();
    console.log("super:");
  }
}
new Dog();

const a: string = "hh";
const b: number = 
