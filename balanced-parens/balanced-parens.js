const parensAreBalanced = (input) => {

  return !input.split('').reduce((prevChar, char) => { // split returns an array on which reduce can be applied
    // just simply check char, if it's any on openings brackets increment prevChar,
    // if we find closing bracket, then decrement prevChar
    if (char === '(' || char === '{' || char === '[') {
      return ++prevChar;
    } else if (char === ')' || char === '}' || char === ']') {
      return --prevChar;
    }

    return prevChar // we need to return a boolean value, we need to use logic ! at the front of the input
    // For numerical return value of 0 for prevChar we return ture
  }, 0);
}

module.exports = parensAreBalanced


