class ArrayOfNumbers {
  constructor(public collection: number[]) { }

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}


new ArrayOfAnything<string>(['a', 'b', 'c'])

const nums = new ArrayOfAnything([1, 2, 3, 4, 5])

// Generics with Functions

const printStrings = (arr: string[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
   
}
 
const printNumbers = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

const printAnything = < T extends {} >(arr: T[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

printAnything<string>(['a', 'b', 'c']);

printAnything([1, 2, 3, 4]);

// Generic Constraint

class Car{
  print() {
    console.log('I am a Car');
  }
}

class House {
  print() {
    console.log('I am a House');
  }
}

interface Printable {
  print(): void;
}
const printHousesOrCars = <T extends Printable>(arr: T[]): void => {
   for (let i = 0; i < arr.length; i++) {
     arr[i].print();
   }

}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars([new House(), new Car(), new House()]);