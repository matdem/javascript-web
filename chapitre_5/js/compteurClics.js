// Script Compteur de clic
// Création d'un boutton qui compte le nombre de clics effectués dessus

// Créer une variable qui servira de compteur avec la balise <span> du fichier html
var compteur = Number(document.getElementById("compteurClics").textContent);

// Créer la fonction pour compter les clics
function clicCounter() {
  compteur += 1;
  document.getElementById("compteurClics").textContent = String(compteur);
}

// Créer l'événement qui gérera les clics
var boutonClic = document.getElementById("clic");
boutonClic.addEventListener("click", clicCounter);

// Créer l'événement qui désactivera les clics
var boutonUnclic = document.getElementById("desactiver");
boutonUnclic.addEventListener("click", function() {
  boutonClic.removeEventListener("click", clicCounter);
});

