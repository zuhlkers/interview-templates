const {expect} = require('chai');
const assert = require('assert');
const fn = require('../src/index');

describe("CodingChallenge", () => {

  it("should return 1", () => {
    expect(1).to.equal(fn());
  });

  it('should return 1', () => {
    assert.equal(fn(), 1)
  })
});
