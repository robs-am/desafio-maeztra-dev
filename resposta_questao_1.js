/* 1 - Crie uma função que receba um valor INTEIRO positivo, e verifique se os DÍGITOS estão em ordenação sequencial CRESCENTE ou DECRESCENTE. Pode considerar dígitos iguais como sequenciais (Variação de um dígito para o outro deve ser 1 ou menor)

Exemplo:
Input 12345678 -> Está ordenado
Input 1223455678 -> Está ordenado
Input 876543210 -> Está ordenado
Input 152456457 -> Não está ordenado
Input 12356789 -> Não está ordenado
Input 13579 -> Não está ordenado
Input 9765421 -> Não está ordenado
Input 123454321 -> Não está ordenado
Input 12222222 -> Está ordenado
Input 2111111 -> Está ordenado
Input 1599 -> Não está ordenado */

function verificarSequencia(numero) {
  let numeroStr = numero.toString();

  for (let i = 0; i < numeroStr.length - 1; i++) {
    let digitoAtual = parseInt(numeroStr[i]);
    let digitoProximo = parseInt(numeroStr[i + 1]);

    if (Math.abs(digitoAtual - digitoProximo) > 1) {
      return false;
    }
  }

  return true;
}

// Testes
console.log(verificarSequencia(12345678)); // true
console.log(verificarSequencia(1223455678)); // true
console.log(verificarSequencia(876543210)); // true
console.log(verificarSequencia(152456457)); // false
