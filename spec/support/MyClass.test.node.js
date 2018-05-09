const MyClassTestNode = require('../../dist/commonjs/MyClass').default;

describe('encode', () => {
  it('returns 1337 when entering nothing', () => {
    const instance = new MyClassTestNode();
    const actual = instance.encode();
    const expected = '1337';
    expect(actual).toBe(expected);
  });
});
