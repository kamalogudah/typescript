import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([99, 3, -5, 0, 90, -10]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
