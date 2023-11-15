const filterNumbers = require ('./filter')
const isNumber = require ('./filter')

test('all filtered', () => {
    const mixedArray = [1, 'apple', 5, 'orange', 8, 10.5, true, false]
    expect(filterNumbers(mixedArray)).toEqual([1, 5, 8, 10.5])
})

