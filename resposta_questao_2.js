/* 2 - Crie uma função que receba um array de inteiros como parâmetro e verifique se neste array existem números duplicados, caso exista, retorne um novo array com os valores que se repetem.

Exemplo:
Input [4,5,44,98,4,5,6,7] → Output [4,5] */

function encontrarDuplicados(array) {
  // Objeto para contar as ocorrências de cada número
  let contagem = {};

  for (let i = 0; i < array.length; i++) {
    let numero = array[i];

    if (contagem[numero]) {
      contagem[numero]++;
    } else {
      contagem[numero] = 1;
    }
  }

  // Array para armazenar os números duplicados
  let duplicados = [];

  // Percorrer o objeto de contagem para identificar duplicados
  for (let numero in contagem) {
    if (contagem[numero] > 1) {
      duplicados.push(parseInt(numero));
    }
  }

  return duplicados;
}

// Testes
console.log(encontrarDuplicados([4, 5, 44, 98, 4, 5, 6, 7])); // [4, 5]
console.log(encontrarDuplicados([1, 2, 3, 4, 5])); // []
