class MyClass {
  constructor() {

  }

  encode(text: string): string {
    if (text) {
      if (text === 'error') {
        throw new Error('You challenged me!');
      } else {
        return new Buffer(text).toString('base64');
      }
    } else {
      return '1337';
    }
  }
}

export {MyClass};
