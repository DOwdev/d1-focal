const args = process.argv;

let sum = function(input) {
  if (input.lenght > 4 && input.lenght < 3) {
    console.log("Unexpected input. Please add 2 numbers.");
  } else {
    let var1 = Number(input[2]);
    let var2 = Number(input[3]);
    console.log(var1 + var2);
  }
  return;
};

sum(args);

