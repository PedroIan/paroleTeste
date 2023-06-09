/**
 * Desafio: escrever uma função que valide se uma palavra é valida em um tabuleiro de Parole.
 * A função irá receber dois argumentos:
 * - Um array bi-dimensional (NxN) com letras de A a Z representando o tabuleiro
 * - Uma palavra que deve ser validada
 *
 * Palavras válidas são formadas por ligações adjacentes das letras (horizontas, vertical, diagonal) sem reutilizar as posições usadas anteriormente.
 *
 * Exemplo de um valor de entrada:
 * [ ["I","L","A","W"],
 *   ["B","N","G","E"],
 *   ["I","U","A","O"],
 *   ["A","S","R","L"] ]
 *
 * Neste caso, podemos considerar:
 * - "BINGO", "ILNBIA", "LINGO" são palavras válidas.
 * - "BUNGIE", "SINUS", "BINS" são palavras inválidas.
 *
 * Não é necessário verificar se a palavra é real ou não, apenas se ela é valida no tabuleiro.
 *
 * Voce pode testar o seu codigo rodando o comando `npm test` no terminal
 * e tambem pode alterar o arquivo `index.test.js` se desejar.
 * Apos enviado, seu codigo sera validado com outros cenarios de teste tambem.
 *
 * @param tabuleiro array bidimensional representando o tabuleiro
 * @param palavra palavra que deve ser validada no tabuleiro
 * @returns `true` ou `false`, informando se a palavra é valida para o tabuleiro
 */
function parole(tabuleiro, palavra) {
  // Iniciar por mapear o tabuleiro
  // Cada letra é salva como um mapa
  // no qual o index é a letra e o valor
  // é um array de indexes no formato {x, y}
  const tabuleiroMap = new Map();
  tabuleiro.forEach((row, x) => {
    row.forEach((letter, y) => {
      if (!tabuleiroMap.get(letter)) {
        tabuleiroMap.set(letter, [{ x, y }]);
      } else {
        tabuleiroMap.get(letter).push({ x, y });
      }
    });
  });

  function isNearby(cell1, cell2) {
    return Math.abs(cell1.x - cell2.x) <= 1 && Math.abs(cell1.y - cell2.y) <= 1;
  }

  function checkTree(word, mapa, start) {
    if (!word.length) return true;

    const wordCopy = [...word];
    const letter = wordCopy.shift();

    const possibleNodes = [...(mapa.get(letter) ?? [])];

    if (!possibleNodes.length) return false;
    let childNodes = [];
    if (start) childNodes = possibleNodes.filter((xy) => isNearby(xy, start));
    else childNodes = possibleNodes;

    // Significa que não há a letra no arredor
    if (!childNodes.length) return false;

    return !!childNodes.some((node) => {
      const mapCopy = new Map(mapa);
      mapCopy.set(
        letter,
        possibleNodes.filter((xy) => !(xy.x == node.x && xy.y == node.y)) ?? []
      );
      return checkTree(wordCopy, mapCopy, node);
    });
  }

  return checkTree(palavra.split(''), tabuleiroMap, null);
}

module.exports = parole;
