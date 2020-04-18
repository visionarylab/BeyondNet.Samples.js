function curryGreetings(greeting) {
  return function (name) {
    return `${greeting} ${name}`;
  };
}

exports.curryGreetings = curryGreetings;
