class Reverse {

  reverse(str) {
    return str.split('').reverse().join('');
  }

  reverse2(str) {
    let reversed = '';

    for (let ch of str) {
      reverserd = ch + reverserd;
    }

    return reverserd;
  }
}

module.exports = Reverse;
