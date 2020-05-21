import { User } from './models/User';

const user = new User({ name: "Paul", age: 20 });
user.set({ name: "Kamal", age: 32 })
user.set({age: 44})
console.log(user.get('name'));
console.log(user.get('age'));
