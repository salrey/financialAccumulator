const {
    roundNum,
} = require("./index.js")

describe("roundNum", () => {
    test('should round to two decimal places and convert string back to a number', () => {
        const actual = roundNum('34.545325254364')
        const expected = 34.55
        expect(actual).toEqual(expected)
    })
})