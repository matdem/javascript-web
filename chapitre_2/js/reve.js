// TODO : écrire la fonction compterElts
function compterElts(attribut) {
  return document.querySelectorAll(attribut).length;
}

console.log(compterElts('p'));
console.log(compterElts('.adjectif'));
console.log(compterElts('p .adjectif'));
console.log(compterElts('p > .adjectif'));
