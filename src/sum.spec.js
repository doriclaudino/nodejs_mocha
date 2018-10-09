var expect = require('chai').expect;
var solution = require('./sum');

describe("sum", function() {
  [
    {
      X: 1,
      Y: 2,
      expected: 3
    },
    {
      X: 4,
      Y: 4,
      expected: 8
    }
  ].forEach(context => {
    it(`X: ${context.X} Y: ${context.Y} `, function() {
      expect(solution(context.X, context.Y)).to.eql(context.expected);
    });
  });
});