const R = require('ramda');

const ramdaGreettings = R.curry((greeting, name) => `${greeting} ${name}`);

exports.ramdaGreettings = ramdaGreettings;
