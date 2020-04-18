import { greetings } from './core';

const { curryGreetings } = require('./currying/basic');
const { partialMorningGreetings } = require('./partial/basic');
const { ramdaGreettings } = require('./ramda/basic');

console.log('1. Executing a simple greeting using a normal function');

console.log(greetings('Good Morning', 'Beto'));

console.log('2. Executing a simple greeting using a curry function');

const friends = ['Beto', 'Ronald', 'Luiggi', 'JC'];

const friendGreetings = friends.map(curryGreetings('Good Morning'));

console.log(friendGreetings);

console.log(
  '3. Executing a simple greating using a partial application function'
);

const morningGreeting = partialMorningGreetings('Johana Sunohara');

console.log(morningGreeting);

console.log('4. Ramda');

const ramdaGreetSimpleFunction = ramdaGreettings('Good Night', 'Aitana');

const ramdaGreetCurry = friends.map(ramdaGreettings('Good Morning'));

const ramdaGreetAfternoonPartial = ramdaGreettings('Good Afternoon');

const ramdaGreetAfternoon = ramdaGreetAfternoonPartial('Beto');

console.log(ramdaGreetSimpleFunction);
console.log(ramdaGreetCurry);
console.log(ramdaGreetAfternoon);
