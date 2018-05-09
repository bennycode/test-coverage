export default class MyClass {
  constructor() {

  }

  encode(text: string): string {
    if (text) {
      return new Buffer(text).toString('base64');
    } else {
      return '1337';
    }
  }
}
