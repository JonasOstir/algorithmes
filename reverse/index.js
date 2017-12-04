class Reverse {

  constructor() {}

  reverse(str) {
    return str.split('').reverse().join('');
  }

  reverse2(str) {
    let reversed = '';

    for (let ch of str) {
      reversed = ch + reversed;
    }

    return reversed;
  }

  reverse3(str) {
    str.split('').reduce((acc, ch) => {
      return ch + acc;
    });
  }
}

module.exports = Reverse;
