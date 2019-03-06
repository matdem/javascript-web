/*
Exercice : afficher l'enfant d'un objet du DOM
*/

// Affiche un enfant d'un objet du DOM
// Le paramètre noeud est l'objet du DOM
// Le paramètre indice est l'indice de l'enfant à afficher
function afficherEnfant(noeud, indice) {
  if ( noeud.nodeType === document.ELEMENT_NODE) {
      if (indice >= 0 && indice <= noeud.childNodes.length) {
        console.log(noeud.childNodes[indice]);
      } else {
        console.error("Indice incorrect");
      };
  } else {
    console.error("Type de noeud incorrect");
  };
};

afficherEnfant(document.body, 1);
afficherEnfant(document.body, -1);
afficherEnfant(document.body, 9);
afficherEnfant(document.body.childNodes[0], 0);
