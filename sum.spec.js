const sum = require ('./sum')

describe ('1 suit', () => {
    test('sum of two positive numbers', () => {
        expect(sum(4,8)).toBe(12)
    })
})

describe ('2 suit', () => {
    test('sum of two negative  numbers', () => {
        expect(sum(-4,-8)).toBe(-12)
    })
})

