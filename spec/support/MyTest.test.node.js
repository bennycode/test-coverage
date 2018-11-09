const MyTest = require('../../dist/commonjs/MyTest').default;

describe('detect', () => {
  it('does not take the else path', () => {
    const actual = MyTest();
    expect(actual).toBe('Node');
  });
});
