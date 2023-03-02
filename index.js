// QUESTAO 1

let INDICE = 13;
let SOMA = 0;
for (let K = 0; K < INDICE; K++) {
  SOMA += K + 1;
}
console.log(SOMA);

// K começa com 0 e vai até 12  0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 = 91.



// QUESTAO 2

function FibonacciSequence(n) {
  let a = 0;
  let b = 1;
  let f = 1;
  
  // Execute o loop até que o número informado seja alcançado
  for (let i = 2; i <= n; i++) {
    f = a + b;
    a = b;
    b = f;
  }

  // Verifica se o número informado é da sequência Fibonacci e retorna uma mensagem
  if (f === n) {
    return "O número informado pertence à sequência de Fibonacci!";
  } else {
    return "O número informado NÃO pertence à sequência de Fibonacci!";
  }
}
console.log(FibonacciSequence(5));


// QUESTAO 3

a) 9
b) 128
c) 49
d) 100
e) 13
f) 20

// QUESTAO 4

O carro estará mais próximo a Ribeirão Preto. A velocidade constante de 110 km é maior que a do caminhão 80 km. Mesmo considerando os 2 pedágios, isso não afeta na distância percorrida pelo carro, já que ele tem tag de pedágio e passa rapidamente


// QUESTAO 5


function reverseString(str) {
  let reversedStr = "";

  // Loop para percorrer a string e invertê-la
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

var inputString = "teste";

var outputString = reverseString(inputString);
console.log(outputString);

