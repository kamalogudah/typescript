class Vehicle {
  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }
  constructor(public color: string) {}
  honk(): void {
    console.log('beep');
  }

  protected price(): void {
    console.log('Expensive shit');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vrooom');
  }

  startDrvingProcess(): void {
    this.drive();
    this.honk();
  }

  letsBuy(): void {
    this.price();
  }
}

const car = new Car('blue');
car.startDrvingProcess();
car.honk();
car.letsBuy();
console.log(car.color);
