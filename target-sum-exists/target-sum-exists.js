const targetSumExistsInTwoNumbers = (list, target) => {

  let l = 0; 
  let r = list.length - 1; 
  while (l < r) { 
    if (list[l] + list[r] === target) { 
      return true;
    }
    else if (list[l] + list[r] < target) { 
      l++;
    } else { 
      r--;
    }
  }
}

const targetSumExistsInThreeNumbers = (list, target) => {
  const sortedList = list.sort()
  for (let i = 0; i < sortedList.length - 2; i++) {
    l = i + 1;
    r = sortedList.length - 1

    while (l < r) {
      if (sortedList[i] + sortedList[l] + sortedList[r] === target) {
        return true;
      } else if (sortedList[i] + sortedList[l] + sortedList[r] < target) {
        l++
      } else {
        r--;
      }
    }
  }
}

module.exports = {
  targetSumExistsInTwoNumbers,
  targetSumExistsInThreeNumbers
}

// For now, it's my best solution, I know I don't handle test when a number from the list can be used more than once, but just don't know how to handle this problem.