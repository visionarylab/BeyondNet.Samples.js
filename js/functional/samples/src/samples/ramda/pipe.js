import R from "ramda";

const function1 = (val) => {
  return "Hello";
};

const function2 = (val) => {
  const value = val + " world.";

  return value;
};

const function3 = (val) => {
  return val + " I am PIPE from RAMDA";
};

const function4 = async (val) => {
  const value = val + " world." + (await GetDate());

  return value;
};

async function GetDate() {
  return await new Date();
}

export const printStringPipe = () => {
  const result = R.pipe(function1, function2, function3)(" ");

  console.log(result);
};

export const printStringPipeAsync = async () => {
  const result = await R.pipe(function1, function4, R.andThen(function3))(" ");

  console.log(result);
};
