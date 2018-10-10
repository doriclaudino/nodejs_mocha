var expect = require('chai').expect;
var solution = require('./coin-exchange');

describe("coin-exchange", function () {
  [
    {
      spent: 6.45,
      money: 10.00,
      expected: [3, 1, 0, 0, 1, 0]
    },
    {
      spent: 9.99,
      money: 10.00,
      expected: [0, 0, 0, 0, 0, 1]
    },
    {
      spent: 3.69,
      money: 10.00,
      expected: [6, 0, 1, 0, 1, 1]
    },
    {
      spent: 10,
      money: 10,
      expected: [0, 0, 0, 0, 0, 0]
    },
    {
      spent: 0,
      money: 10,
      expected: [10, 0, 0, 0, 0, 0]
    },
  ].forEach(context => {
    it(`spent: ${context.spent} money: ${context.money} `, function () {
      expect(solution(context.spent, context.money)).to.eql(context.expected);
    });
  });
});