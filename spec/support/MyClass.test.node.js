const MyLibrary = require('../../dist/commonjs/index');

describe('encode', () => {
  it('encodes text in Base64', () => {
    const instance = new MyLibrary.MyClass();
    const actual = instance.encode('hi');
    expect(actual).toBe('aGk=');
  });

  it('returns "1337" when entering nothing', () => {
    const instance = new MyLibrary.MyClass();
    const actual = instance.encode();
    const expected = '1337';
    expect(actual).toBe(expected);
  });

  it('throws an error when supplying "error"', () => {
    const instance = new MyLibrary.MyClass();
    const test = () => instance.encode('error');
    expect(test).toThrowError(Error);
  });
});
