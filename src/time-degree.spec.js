var expect = require('chai').expect;
var solution = require('./time-degree');

describe("time-degree", function () {
  [
    {
      hour: 0,
      minutes: 0,
      expected: 0
    },
    {
      hour: 9,
      minutes: 45,
      expected: 0
    },   
    {
      hour: 0,
      minutes: 2,
      expected: 12
    },  
    {
      hour: 10,
      minutes: 45,
      expected: 330
    },
    {
      hour: 0,
      minutes: 59,
      expected: 354
    },
    {
      hour: 6,
      minutes: 29,
      expected: 354
    },
    {
      hour: 2,
      minutes: 0,
      expected: 300
    },
  ].forEach(context => {
    it(`hour: ${context.hour} minutes: ${context.minutes} `, function () {
      expect(solution(context.hour, context.minutes)).to.eql(context.expected);
    });
  });
});