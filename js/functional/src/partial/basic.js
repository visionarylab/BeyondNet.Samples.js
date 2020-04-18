const { curryGreetings } = require('../currying/basic');

const partialMorningGreetings = curryGreetings('Good Morning');

exports.partialMorningGreetings = partialMorningGreetings;
