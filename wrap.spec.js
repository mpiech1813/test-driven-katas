const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string it empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Return string', () => {
    expect(typeof wrap('word', 20)).to.equal('string');
  });
  it('String returned is shorter or equal to column number', () => {
    expect(wrap('hello hello hello hello hello', 20)).to.equal(
      'hello hello hello '
    );
  });
});
