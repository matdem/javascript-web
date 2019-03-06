// Exercice desserts.js
// Créer un bouton qui ajoutera dans une liste de desserts

// Variables

// Fonctions
function desserts(e) {
  var dessert = prompt("Quel est votre dessert ?");
  var liElt = document.createElement("li");
  liElt.id = dessert;
  liElt.textContent = dessert;
  document.getElementById("desserts").appendChild(liElt);
  // Ajouter l'évément pour gérer le "click" dans la fonction
  document.getElementById(dessert).addEventListener("click", function(e) {
    var modifDessert = prompt("Votre modification: ", e.target.textContent);
    e.target.textContent = modifDessert;
  });
}

function modifDessert(e) {
}

// Événements
document.getElementsByTagName("button")[0].addEventListener("click", desserts);

