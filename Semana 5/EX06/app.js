import Juros from './Juros.js'

const jurosSimples = new Juros(10000, 7, 24);
console.log(jurosSimples.calcularJurosSimples().toFixed(2));

const jurosCompostos = new Juros(10000, 15, 10);
console.log(jurosCompostos.calcularJurosCompostos().toFixed(2));