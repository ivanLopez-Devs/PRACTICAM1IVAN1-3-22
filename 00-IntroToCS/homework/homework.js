'use strict'

// explicacion de binario a decimales
// como se hace para pasar de binario a decimal, el siguiente numero:
// 1001 = 1 x 2 ^ 3 + 0 x 2 ^ 2 + 0 x 2 ^ 1 + 1 x 2 ^ 0
// explicacion 1 (es el simbolo) x 2 (binario) ^ (elevado) 3 (posision del simbolo contando desde la derecha iniciando en cero)

// 1001 = 1 x 2 ^ 3 + 0 x 2 ^ 2 + 0 x 2 ^ 1 + 1 x 2 ^ 0
//      = 

// me fijo el test y analizo que estan pasando en este caso pasan un string. "10"
//                      "1001"
function BinarioADecimal(num) {
  // tu codigo aca
  let decimal = 0;
  for (let i = 0; i < num.length; i++){
    decimal = decimal + num[i] * 2 ** (num.length - 1 - i)
  }
  return decimal;
}


// 13/ 2 = 6.5 ---> 6 | 1
// 6 / 2 = 3   ---> 3 | 0
// 3 / 2 = 1.5 ---> 1 | 1
// 1 / 2 = 0.5  --> 0 | 1

// 13 = 1101 (el resto desde abajo)

function DecimalABinario(num) {
  // tu codigo aca
  let binary = "";
  while(num > 0){
    binary = (num % 2) + binary;
    num = Math.floor(num / 2)
  }
  return binary;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}