// Liste des mots du dictionnaire

var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];


// TODO : créer le dictionnaire sur la page web, dans la div "contenu"

// Insertion de la balise dl
var dlElt = document.createElement('dl');
dlElt.id = 'glossaire';
document.getElementById('contenu').appendChild(dlElt)

// Insertion du glossaire à l'aide de la boucle for
for (i = 0; i < mots.length; i++) {
  var dtElt = document.createElement('dt');
  var ddElt = document.createElement('dd');
  var strongElt = document.createElement('strong');
  dtElt.id = mots[i].terme.toLowerCase();
  strongElt.textContent = mots[i].terme;
  ddElt.textContent = mots[i].definition;
  document.getElementById('glossaire').appendChild(dtElt);
  document.getElementById(mots[i].terme.toLowerCase()).appendChild(strongElt);
  document.getElementById('glossaire').appendChild(ddElt);
}
