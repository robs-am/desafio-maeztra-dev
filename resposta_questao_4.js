/* 4 - Considere um conjunto de pessoas aposentadas, onde cada pessoa começou a trabalhar em ano X e aposentou em ano Y. Crie uma função que receba uma matriz na seguinte estrutura [[x1,y1],[x2,y2],...[xn,yn]] e calcule em qual/quais ano/anos houve mais pessoas trabalhando.

Considere:

Os valores de X como o ano que os indívíduos começaram a trabalhar (x>0, x<y );
Os valores de Y como o ano que os indívíduos se aposentaram (y>0);
O ano de início deve ser considerado como ano trabalhado;
O ano de aposentadoria deve ser considerado como ano trabalhado.
Exemplo:
Input [[1960,2005],[1945,2008],[1938,1999],...] */

function anosPessoasTrabalhando(matriz) {
  let anosTrabalhados = {};

  matriz.forEach((par) => {
    let anoInicio = par[0];
    let anoAposentadoria = par[1];

    for (let ano = anoInicio; ano <= anoAposentadoria; ano++) {
      anosTrabalhados[ano] = (anosTrabalhados[ano] || 0) + 1;
    }
  });

  let maxPessoas = Math.max(...Object.values(anosTrabalhados));
  let anosComMaxPessoas = [];

  for (let ano in anosTrabalhados) {
    if (anosTrabalhados[ano] === maxPessoas) {
      anosComMaxPessoas.push(parseInt(ano));
    }
  }

  return anosComMaxPessoas;
}

// Exemplo de uso
let matrizExemplo = [
  [1960, 2005],
  [1945, 2008],
  [1938, 1999],
];
console.log(anosPessoasTrabalhando(matrizExemplo)); //
