/* 3 - Crie uma função que recebe uma string com qualquer sequência dos seguintes caracteres '[', '{', '(', ')', '}', ']' e retorne se a sequência é uma sequência válida ou não. Uma sequência é válida se as chaves, parênteses e colchetes abrem e fecham corretamente

Exemplo:
{ [ ( ) ( ) { } [ ] ] { } } é uma sequência válida
{ [ ( ( ) ] } não é uma sequência válida (Há um parêntese posicionado incorretamente)
{ } [ ] ( ) é uma sequência válida
( ( ) { } [ [ ] ) não é uma sequência válida (Há uma chave posicionado incorretamente) [ { } ( [ ) ] ] não é uma sequência válida (O número de caracteres está correto, mas o posicionamento de uma chave/parêntese está incorreto)

Dica: Os espaços nos exemplos são apenas para favorecer a leitura.
Espaços não farão parte das strings de teste */

function sequenciaValida(s) {
  const pares = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  let pilha = [];

  for (let char of s) {
    if (pares[char]) {
      pilha.push(char);
    } else {
      let topo = pilha.pop();
      if (pares[topo] !== char) {
        return false;
      }
    }
  }

  return pilha.length === 0;
}

// Testes
console.log(sequenciaValida('{[()(){}[]]{}}')); // true
console.log(sequenciaValida('{[(())]}')); // true

/*  A função sequenciaValida verifica se uma sequência de caracteres ('[', '{', '(', ')', '}', ']') é válida, usando um objeto pares para mapear os caracteres de abertura para seus correspondentes de fechamento. Uma pilha (pilha), implementada como um array, é utilizada para armazenar os caracteres de abertura conforme são encontrados. Quando um caractere de fechamento é encontrado, ele é comparado com o topo da pilha para garantir o emparelhamento correto. Se a pilha estiver vazia ao final da iteração, a sequência é válida. */
