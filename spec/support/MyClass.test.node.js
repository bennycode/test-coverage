const MyLibrary = require('../../dist/commonjs/index');

describe('encode', () => {
  it('returns 1337 when entering nothing', () => {
    const instance = new MyLibrary.MyClass();
    const actual = instance.encode();
    const expected = '1337';
    expect(actual).toBe(expected);
  });
});
