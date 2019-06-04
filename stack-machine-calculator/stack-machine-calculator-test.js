const process = require('./stack-machine-calculator')
const test = require('./node_modules/tape')

test('pushing values', assert => {
  assert.equal(process('13'), 13)
  assert.equal(process('13 10 9 7'), 7)

  assert.end()
})

test('duplicating values', assert => {
  assert.equal(process('9 11 DUP'), 11)

  assert.end()
})

test('popping values', assert => {
  assert.equal(process('1 3 POP'), 1)

  assert.end()
})

test('adding two values', assert => {
  assert.equal(process('5 12 +'), 17)

  assert.end()
})

test('subtracting two values', assert => {
  assert.equal(process('4 10 -'), 6)

  assert.end()
})

test('complex example', assert => {
  assert.equal(process('13 DUP 4 POP 5 DUP + DUP + -'), 7)

  assert.end()
})
