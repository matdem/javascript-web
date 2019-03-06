// instuments.js --> exercice affichant le nombre de liens d'une page web

function infoLiens() {
  nbLiens = document.getElementsByTagName("a").length;
  premierLien = document.getElementsByTagName("a")[0].href;
  dernierLien = document.getElementsByTagName("a")[nbLiens - 1].href;
  console.log(nbLiens);
  console.log(premierLien);
  console.log(dernierLien);
}

function possede(instrument, famille) {
  var elt = document.getElementById(instrument);
  if (elt === null) {
    console.log("Aucun élément ne possède l'identifiant " + instrument);
  } else {
    return console.log(elt.classList.contains(famille));
  }
}

infoLiens();
possede('clarinette', 'bois');
possede('saxophone', 'cuivre');
possede('trompette', 'cuivre');
possede('contrebasse', 'cordes');
