const parole = require('./index');

var tabuleiro = [
  ['E', 'A', 'R', 'A'],
  ['N', 'L', 'E', 'C'],
  ['I', 'A', 'I', 'S'],
  ['B', 'Y', 'O', 'R'],
];

// Testes adicionais pessoais
var tabuleiroB = [
  ['I', 'L', 'A', 'W'],
  ['B', 'N', 'G', 'E'],
  ['I', 'U', 'A', 'O'],
  ['A', 'S', 'R', 'L'],
];

test('Parole valido', () => {
  expect(parole(tabuleiro, 'C')).toBe(true);
  expect(parole(tabuleiro, 'EAR')).toBe(true);
  expect(parole(tabuleiro, 'BAILER')).toBe(true);
  expect(parole(tabuleiro, 'RSCAREIOYBAILNEA')).toBe(true);

  // Testes adicionais pessoais
  expect(parole(tabuleiroB, 'BINGO')).toBe(true);
  expect(parole(tabuleiroB, 'ILNBIA')).toBe(true);
  expect(parole(tabuleiroB, 'LINGO')).toBe(true);
});

test('Parole invalido', () => {
  expect(parole(tabuleiro, 'EARS')).toBe(false);
  expect(parole(tabuleiro, 'CEREAL')).toBe(false);
  expect(parole(tabuleiro, 'ROBES')).toBe(false);
  expect(parole(tabuleiro, 'BAKER')).toBe(false);
  expect(parole(tabuleiro, 'CARS')).toBe(false);

  // Testes adicionais pessoais
  expect(parole(tabuleiro, 'ELNEL')).toBe(false);
  expect(parole(tabuleiro, 'ELEAE')).toBe(false);

  expect(parole(tabuleiroB, 'BUNGIE')).toBe(false);
  expect(parole(tabuleiroB, 'SINUS')).toBe(false);
  expect(parole(tabuleiroB, 'BINS')).toBe(false);
});
