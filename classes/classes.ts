class Vehicle {
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

const car = new Car();
car.startDrvingProcess();
car.honk();
car.letsBuy();
