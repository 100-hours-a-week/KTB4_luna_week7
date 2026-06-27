import {add, substract} from './operations.js';
import User from './userProfile.js';

const user = new User("Jane Doe", 25);
console.log(`Hello, my name is ${user.name} and I am ${user.age} years old.`);

console.log(add(2, 3));
console.log(substract(3, 2));