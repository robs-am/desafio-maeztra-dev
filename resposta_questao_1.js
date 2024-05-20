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

// Explicação

/* A função verificarSequencia verifica se os dígitos de um número estão em uma sequência crescente ou decrescente. Converti o número para uma string, assim podemos usar índices para acessar e comparar os caracteres diretamente.

Foi usado um loop for para percorrer a string, excluindo o último dígito, pois estaremos sempre comparando um dígito com o próximo. Dentro do loop, convertemos os caracteres atuais e os próximos de volta para inteiros usando parseInt pra comparar os valores numéricos

A comparação é feita usando a função Math.abs, que calcula a diferença absoluta entre dois números. Se a diferença entre quaisquer dois dígitos adjacentes for maior que 1, a função retorna false, indicando que os dígitos não estão em uma sequência aceitável. Se o loop completa sem encontrar nenhuma diferença maior que 1, todos os dígitos são sequenciais, e a função retorna true */
