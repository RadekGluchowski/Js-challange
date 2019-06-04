const mostRecurrent = (set) => {

  let map = new Map() // new Map obj
  for (let number of set) { // loop whole array we got 
    map.set(number, (map.get(number) || 0) + 1) //using map.set, we set key as a next num in our table, and the value is the amount of recurring number, IF we don't have the same number in array before we just adding +1 to 0, IF we have this number, we pick this value by map.get and adding to this value 1. 
    console.log(map)
  }

  let mostRecurrentNumber = 0
  let maxRecurrentt = 0
  for (let [number, count] of map.entries()) { // num = key, count = value we set in loop before
    console.log("NUM:" + number)
    console.log("COUNT:" + count)
    if (count > maxRecurrentt) { // in the loop we iterate from First key and value, there we checking number count is bigger than maxRecurrent. 
      maxRecurrentt = count  // then we assign maxRecurrent to count value, in next run of the loop, we will compare next number count to before number count.
      mostRecurrentNumber = number // assign mostRecurrentNumber to a number that has the most amount of count, after we iterate whole map obj.
    }
  }
  return mostRecurrentNumber
}

module.exports = mostRecurrent

