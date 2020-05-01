import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([99, 3, -5, 0, 90, -10]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Pauloguda');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(50);
linkedList.add(-7);
linkedList.add(0);
linkedList.add(5);
linkedList.add(-1000);

linkedList.sort();
linkedList.print();
