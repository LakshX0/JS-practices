class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  sleep() {
    this.energy += 10;
  }

  doSomethingFun() {
    this.energy -= 10;
  }
}
class Worker extends Person {
  constructor(xp = 0, hourlyWage = 10, name, energy) {
    super(name, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }

  goToWork() {
    this.xp += 10;
  }
}

function intern() {
  let intern = new Worker(0, 10, "Bob", 110);
  intern.goToWork();

  return intern;
}

let newIntern = intern();
console.log(newIntern);

function manager() {
  let manager = new Worker(100, 30, "Alice", 120);
  manager.doSomethingFun();

  return manager;
}

let newManager = manager();
console.log(newManager);
