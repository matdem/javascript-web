// Exercice 2, Chapitre_4

// Défitions des variables --------------------
var infosElt = document.getElementById("infos");
var ulElt = document.createElement("ul");
var liElt1 = document.createElement("li");
var liElt2 = document.createElement("li");
var contenuElt = getComputedStyle(document.getElementById("contenu"));

// Définitions des infos des éléments ------------------
infosElt.textContent = "Information sur l'élément"

// liElt
liElt1.textContent = "La hauteur : " + contenuElt.height;
liElt2.textContent = "La longueur : " + contenuElt.width;


// Ajout des nouveaux éléments -------------------
infosElt.appendChild(ulElt);
ulElt.appendChild(liElt1);
ulElt.appendChild(liElt2)
