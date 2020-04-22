interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }) => {
//   console.log(`Name : ${vehicle.name}`);
//   console.log(`Year : ${vehicle.year}`);
//   console.log(`Broken? : ${vehicle.broken}`);
// };

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};
printVehicle(oldCivic);
