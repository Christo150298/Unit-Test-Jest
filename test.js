const { sum } = require('./app.js')

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
})

test('One euro should be 1.2 dollars', function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(1)).toBe(1.2)
})

test('Ten dollars should be 1279 yens', function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(10)).toBe(1279)
})

test("Twenty yen should be 16 puns", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(20)).toBe(16);
})