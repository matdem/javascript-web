// Exercice "Changement de couleurs"
// Objectif : Changement la couleur de fond des paragraphes en appuyant sur les touches R J V B (Rouge, Jaune, Vert, Bleu).

// var pour les paragraphes

// Création de la fonction 
function couleurs(e) {
  var x = String.fromCharCode(e.charCode);
  x = x.toUpperCase();
  var couleur = "";
  switch (x) {
  case "R": // lettre r/R
    couleur = "red";
    break;
  case "J": // lettre j/J
    couleur = "yellow";
    break;
  case "V": // lettre v/V
    couleur = "green";
    break;
  case "B": // lettre b/B
    couleur = "blue";
    break;
  default :
    console.log("Touche " + x + " non permise");
  }

  var para = document.getElementsByTagName("div");
  for (var i = 0; i < para.length; i++) {
    para[i].style.backgroundColor = couleur;
  }
}

// Création de l'événement
document.addEventListener("keypress", couleurs);
