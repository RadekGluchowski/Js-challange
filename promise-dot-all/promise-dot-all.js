function all(promises) {
  console.log(promises)
  if( promises.length > 0) { // checking if we have any promise in our array
  return new Promise(async (resolve, reject) => {
    let results = []
    for (let promise of promises.map(Promise.resolve, Promise)) { // waiting till all promises will run out
      results.push(await promise.then(async resolvedData => await resolvedData, reject))
      if (results.length === promises.length) resolve(results)
    }
  })
} else {
  return new Promise(async (resolve, reject) => { 
    resolve([])
  })
}
}

module.exports = all