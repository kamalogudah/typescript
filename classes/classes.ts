class Vehicle {
  drive(): void {
    console.log('screetch ccheich');
  }

  honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('vrooom');
  }
}

const car = new Car();
car.drive();
car.honk();
