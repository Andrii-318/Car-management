class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    return `Ім'я: ${this.name}, Вік: ${this.age}`;
  }
}

class Car {
  constructor(make, model, year, plate) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.plate = plate;
    this.owner = null;
  }

  assignOwner(person) {
    if (person.age > 18) {
      this.owner = person;
      console.log(`Власник призначений: ${person.name}`);
    } else {
      console.log("Власник має бути старше 18 років.");
    }
  }

  displayInfo() {
    return `Марка: ${this.make}, Модель: ${this.model}, Рік: ${this.year}, Номерний знак: ${this.plate}`;
  }
}

let persons = [];
let cars = [];

function addPerson() {
  const name = document.getElementById("personName").value;
  const age = parseInt(document.getElementById("personAge").value);
  if (age > 18) {
    const person = new Person(name, age);
    persons.push(person);
    displayOutput(person.displayInfo());
  } else {
    displayOutput("Вік особи має бути більше 18 років.");
  }
}

function assignOwner() {
  const make = document.getElementById("carMake").value;
  const model = document.getElementById("carModel").value;
  const year = parseInt(document.getElementById("carYear").value);
  const plate = document.getElementById("carPlate").value;
  const car = new Car(make, model, year, plate);
  cars.push(car);
  if (persons.length > 0) {
    car.assignOwner(persons[0]);
  }
  displayOutput(car.displayInfo());
}

function displayOutput(message) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML += `<p>${message}</p>`;
}
