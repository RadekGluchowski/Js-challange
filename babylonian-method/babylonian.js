const squareRoot = (radicand) => {

  let isNumber = typeof radicand
  if (isNumber === "number" && radicand > -1) { // checking is a radical positive number
    let output = radicand;
    let difference = 0.000000000000001; // number of decimal precision places 

    while ((output - radicand / output) > difference) { // if our while loop detect our output number is changing in smaller value than our difference, will break, and return our last output value
      output = (output + radicand / output) / 2; // computing
      console.log(output);
    }
    return output
  } else {
    return output = NaN
  }
  return output
}

module.exports = squareRoot
