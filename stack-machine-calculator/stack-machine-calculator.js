const stackMachineCalculator = (instructions) => {

  const newArray = instructions.split(" ") // filling new array with numbers and separately by operators
    .map(function (x) {
      if (x === "+") {
        return x = "+"
      } else if (x === "-") {
        return x = "-"
      } else if (x === "POP") {
        return x = "POP"
      } else if (x === "DUP") {
        return x = "DUP"
      } else { return +x; }
    });

  console.log(newArray)

  let stack = [];

  for (let i = 0; i < newArray.length; i++) {

    let char = newArray[i];

    if (typeof char === "number") { // if number push to stack 
      stack.push(char);
    }
    console.log(stack)

    let res;

    // if operator, check with one and then compute

    if (char == "+") {
      let op2 = stack.pop(); // we need to pop 2 last values, so we assign theirs value to variable, and pop then 
      let op1 = stack.pop();
      res = op1 + op2;
      stack.push(res); // and in the end we push to the array new value 
    }
    if (char == "-") {
      let op2 = stack.pop();
      let op1 = stack.pop();
      res = op2 - op1;
      stack.push(res);
    }
    if (char == "POP") { // on "POP" just pop last value.
      stack.pop();
    }
    if (char == "DUP") { // on "DUP" assign value of last index of array, then pop it 
      let a = stack.pop(); 
      stack.push(a) // and twince push poped value
      stack.push(a)
    }

  }
  console.log(stack)
  return stack[stack.length - 1] // return the most right value, so it's last element of our array
}

module.exports = stackMachineCalculator



// I know, in last "DUP" we are pushing the same value 2x times, and before we pop one, but
// for now i don't have idea how to fix it.