const utils = require('./index')

// it('works', () => {
//   expect(3).toBe(3)
//   expect(3).not.toBeGreaterThan(4)
// })

// it('is not same toEqual and toBe', () => {
//   let a = {}
//   let b = {}
//   let c = a
//   expect(a).toBe(b)
//   expect(a).toEqual(b)
//   expect(a).toBe(c)
// })

// it('exists', () => {
//   expect(utils).toBeDefined()
// })

describe('[Exercise 1] trimProperties', () => {
  it('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  it('[2] returns a copy, leaving the original object intact', () => {
    const orig = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(orig)
    expect(actual).not.toBe(orig)
    expect(actual).toEqual(expected)
    expect(actual).not.toEqual(orig)

  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  it('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  it('[4] the object returned is the exact same one we passed in', () => {
    const orig = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(orig)
    expect(orig).toBe(orig)
    expect(actual).toEqual(expected)
    expect(actual).toBe(orig)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  it('[5] returns the largest number in an array of numbers', () => {
    const nums = [23, 63, 7, 35]
    const expected = 63
    const actual = utils.findLargestInteger(nums)
    expect(actual).toEqual(expected)
  })
})

// describe('[Exercise 4] Counter', () => {
//   let counter
//   beforeEach(() => {
//     counter = new utils.Counter(3) // each test must start with a fresh couter
//   })
//   it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
//     // ✨ test away
//   })
//   it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
//     // ✨ test away
//   })
//   it('[8] the count eventually reaches zero but does not go below zero', () => {
//     // ✨ test away
//   })
// })

// describe('[Exercise 5] Seasons', () => {
//   let seasons
//   beforeEach(() => {
//     seasons = new utils.Seasons() // each test must start with fresh seasons
//   })
//   it('[9] the FIRST call of seasons.next returns "summer"', () => {
//     // ✨ test away
//   })
//   it('[10] the SECOND call of seasons.next returns "fall"', () => {
//     // ✨ test away
//   })
//   it('[11] the THIRD call of seasons.next returns "winter"', () => {
//     // ✨ test away
//   })
//   it('[12] the FOURTH call of seasons.next returns "spring"', () => {
//     // ✨ test away
//   })
//   it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
//     // ✨ test away
//   })
//   it('[14] the 40th call of seasons.next returns "spring"', () => {
//     // ✨ test away
//   })
// })

// describe('[Exercise 6] Car', () => {
//   let focus
//   beforeEach(() => {
//     focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
//   })
//   it('[15] driving the car returns the updated odometer', () => {
//     // ✨ test away
//   })
//   it('[16] driving the car uses gas', () => {
//     // ✨ test away
//   })
//   it('[17] refueling allows to keep driving', () => {
//     // ✨ test away
//   })
//   it('[18] adding fuel to a full tank has no effect', () => {
//     // ✨ test away
//   })
// })

// describe('[Exercise 7] isEvenNumberAsync', () => {
//   it('[19] resolves true if passed an even number', () => {
//     // ✨ test away
//   })
//   it('[20] resolves false if passed an odd number', () => {
//     // ✨ test away
//   })
//   it('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
//     // ✨ test away
//   })
//   it('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
//     // ✨ test away
//   })
// })
