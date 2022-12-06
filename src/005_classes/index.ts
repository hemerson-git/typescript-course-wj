abstract class UserAccount {
  // Can be extended but not implemented
  name: string;
  protected age: number; // Will be accessible to this class and it children

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }

  logDetails(): void {
    console.log(`This player ${this.name} has ${this.age} years old.`);
  }
}

class CharAccount extends UserAccount {
  private nickname: string; // Will not be accessible outside of this class
  readonly level: number; // Will be accessible outside of this class only to be read.

  get getNickname() {
    return this.nickname;
  }

  set setNickname(nickname: string) {
    this.nickname = nickname;
  }

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }
}

// const hemerson = new UserAccount("Hemerson", 25); We can't create an instance, cuz this class is abstract

// console.log(hemerson);
// console.log(hemerson.age); won't work because .age is not accessible outside the class
// hemerson.logDetails();

const hemersonChar = new CharAccount("Hemerson", 25, "hemerson", 100);
hemersonChar.logDetails();
hemersonChar.setNickname = "otherNickname";
console.log(hemersonChar.getNickname);
