/*var titresElts = document.getElementsByTagName('h2')
console.log(titresElts[0]);
console.log(titresElts.length);
*/

/*// Tous les éléments de la class "merveilles"
var merveillesElts = document.getElementsByClassName("merveilles");
for (i = 0; i < merveillesElts.length; i++) {
  console.log(merveillesElts[i]);
};
*/

/*// Élément portant l'identifiant "nouvelles"
console.log(document.getElementById("nouvelles"));
*/
/*
// Tous les paragraphes
console.log(document.querySelectorAll('p').length);

// Tous les paragraphes à l'intérieur de l'élément identifié par "contenu"
console.log(document.querySelectorAll("#contenu p").length);

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll('.existe').length);*/
/*
// Le contenu HTML de l'élément identifié par "contenu"
console.log(document.getElementById('nouvelles').textContent);*/

/*// L'identifiant de la deuxième liste
console.log(document.querySelector("ul").id);
*/
var classes = document.getElementById("antiques").classList;
if (classes.contains('merveilles')) {
  console.log("L'élément identifié par antiques possède la classe merveilles");
} else {
  console.log("L'élément identifié par antiques ne possèe pas la classe merveilles");
};

console.log(document.querySelector("a").hasAttribute("href"));
