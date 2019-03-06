// Liste des journaux

var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];


// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
for (i = 0; i < journaux.length; i++) {
  var linkElt = document.createElement('a');
  linkElt.href = journaux[i];
  linkElt.textContent = journaux[i];
  document.getElementById('contenu').appendChild(linkElt);
  document.getElementById('contenu').appendChild(document.createElement('br'));
}
