import { Color } from './module1.js';

export class CreateHexa {
  constructor() {
    this.letters = 'ABCDEF';
    this.numbers = '0123456789'
    this.code;
    this.arrayColors = [];
  }

  hexaCode() {
    for (let j = 0; j < 6; j++) {
      this.code = '';
      for (let i = 0; i < 3; i++) {
        const randomLetters = Math.floor(Math.random() * this.letters.length)
        const randomNumbers = Math.floor(Math.random() * this.numbers.length)
        this.code += this.letters[randomLetters] + this.numbers[randomNumbers]
      }
      this.arrayColors[j] = `#${this.code}`
    }
    return this.arrayColors
  }

  rgbCode(corEscolhida) {
    //Converte hexadecimal para rgb
    if (corEscolhida.charAt(0) === '#') {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      corEscolhida = corEscolhida.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });

      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(corEscolhida);

      return `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
    } else{
      return corEscolhida
    }
  }
}
