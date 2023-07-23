import { CreateHexa } from './module2.js';
const createHexa = new CreateHexa();

export class Color {
  constructor() {
    this.randomRGB = [];
    this.colorRGB = [];
    this.contador;
    this.valorMode;
    this.corEscolhida;
    this.h1 = document.querySelector('.color_select')
    this.divColors = document.querySelectorAll('.color')
    this.btnStart = document.querySelector('#start')
    this.timer = document.querySelector('#timer')
  }

  start(value) {
    this.btnStart.addEventListener('click', () => {
      
      this.cont(this.valorMode);
      if (value) {
        const rgb = this.geraRGB()
        this.showColors(rgb)
        this.corEscolhida = this.choiceColor(rgb)
      } else {
        const hexa = createHexa.hexaCode()
        this.showColors(hexa)
        this.corEscolhida = this.choiceColor(hexa)
      }
      this.verificaEscolha(this.corEscolhida)
    })
  }

  mode(mode) {
    if (mode === 'easy') {
      this.valorMode = 15;
      document.querySelector('#easy').classList.add('modeSelect')
      document.querySelector('#hard').classList.remove('class', 'modeSelect')
      this.start(true)
    } else {
      this.valorMode = 15;
      document.querySelector('#hard').classList.add('modeSelect')
      document.querySelector('#easy').classList.remove('class', 'modeSelect')
      this.start(false)
    }
  }

  restart() {
    this.btnStart.textContent = 'Restart'
    this.btnStart.addEventListener('click', e => {
      location.reload();
    })
  }

  cont(valor) {
    clearInterval(this.contador)
    this.contador = setInterval(() => {
      this.timer.textContent = `${valor}s`
      this.finish(valor)
      valor--
    }, 1000);
  }

  geraRGB() {
    //Gerando 6 cores:
    for (let j = 0; j < 6; j++) {
      for (let i = 0; i < 3; i++) {
        const numberRGB = Math.floor(Math.random(255, 1) * (255 - 1) + 1)
        this.randomRGB[i] = numberRGB
      }
      this.colorRGB[j] = `rgb(${this.randomRGB[0]}, ${this.randomRGB[1]}, ${this.randomRGB[2]})`
    }
    return this.colorRGB
  }

  choiceColor(arrayColors) {
    const choice = Math.floor(Math.random() * 6) //Escolhe um número entre 0 e 5
    this.h1.textContent = arrayColors[choice]
    return arrayColors[choice]
  }

  showColors(arrayColors) {
    for (let i = 0; i < 6; i++) {
      this.divColors[i].style.background = arrayColors[i]
    }
  }

  verificaEscolha(corEscolhida) {
    this.corEscolhida = createHexa.rgbCode(corEscolhida);

    document.addEventListener('click', e => {
      const elemento = e.target

      if (elemento.classList.contains('color')) {
        if (elemento.style.backgroundColor === this.corEscolhida) {
          this.h1.style.color = 'green'
          this.h1.textContent = 'Yes!'
          clearInterval(this.contador)
          this.restart()
        } else {
          this.h1.style.color = 'red'
          this.h1.textContent = 'No!'

          setTimeout(() => {
            this.h1.textContent = corEscolhida
            this.h1.style.color = 'white'
          }, 600);
        }
      }
    })
  }

  finish(cont) {
    if (cont == 0) {
      clearInterval(this.contador)
      this.h1.textContent = 'Game Over!'
      this.restart()
    }
  }
}