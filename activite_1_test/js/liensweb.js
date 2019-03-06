/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web
// Couleur titre lien = "#428bca"
for (var i = 0; i < listeLiens.length; i++) {
  // Créations des nouveaux éléments + Ajout des infos
  var pElt = document.createElement("p");
  pElt.classList.add("lien");
  var lienElt = document.createElement("a");
  lienElt.href = listeLiens[i].url;
  var strongElt = document.createElement("strong");
  strongElt.style.color = "#428bca";
  strongElt.textContent = listeLiens[i].titre;
  var spanElt = document.createElement("span");
  spanElt.textContent = ` ${listeLiens[i].url}`;
  var brElt = document.createElement("br");
  
  // Insertion des éléments dans le DOM
  document.getElementById("contenu").appendChild(pElt);
  pElt.appendChild(lienElt);
  lienElt.appendChild(strongElt);
  pElt.appendChild(spanElt);
  spanElt.appendChild(brElt);
  spanElt.appendChild(document.createTextNode(`Ajouté par ${listeLiens[i].auteur}`));
}
  
