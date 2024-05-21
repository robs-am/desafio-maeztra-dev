/* 5 - Um grupo de amigos será colocado lado a lado para tirar uma foto. De quantos modos distintos os amigos podem se organizar para tirar a foto? Desenvolva uma função que receba um número de pessoas (valor inteiro) e retorne quantas possibilidades de organização existem para que o fotografo saiba o número de modos distintos que esse grupo e outros grupos possam se organizar. */

function fatorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

function numeroDeModosDeOrganizar(numeroDePessoas) {
  return fatorial(numeroDePessoas);
}

// Exemplo de uso
let numeroDePessoas = 5;
console.log(numeroDeModosDeOrganizar(numeroDePessoas)); // Output: 120 (5!)

// Explicação

// A função fatorial() recebe um número n e retorna o produto de todos os números inteiros de 1 até n. Escolhi usar o fatorial por entender  que éuma maneira direta de calcular o número de arranjos distintos de um grupo de amigos.
