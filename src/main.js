import 'regenerator-runtime/runtime';
import './assets/css/style.css';
import { Color } from './modules/module1.js';

const color = new Color();
let corEscolhida;
let colorRGB

document.addEventListener('click', e => {
  const elemento = e.target

  if (elemento.getAttribute('id') === 'easy' || (elemento.getAttribute('id') === 'hard')) {
    color.mode(elemento.getAttribute('id'))
  }

  // if (elemento.getAttribute('id') === 'start') {
  //   if (color.valorMode === 'undefined') {

  //   }
  //   corEscolhida = color.choiceColor(colorRGB)
  //   color.showColors(colorRGB)
  //   color.restart()
  // }

  // if (elemento.getAttribute('class') === 'color') {
  //   if (!corEscolhida) { console.log('clique em start para começar') }
  //   else { color.verificaEscolha(corEscolhida, elemento) }
  // }

})