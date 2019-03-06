// Exercice "Changement de couleurs"
// Objectif : Changement la couleur de fond des paragraphes en appuyant sur les touches R J V B (Rouge, Jaune, Vert, Blanc).

// var pour les paragraphes

// Création de la fonction 
function couleurs(e) {
  var x = e.charCode;
  var couleur = "";
  
  // ***Avec switch on ne peut pas utiliser de comparateur Boléen***
  // Il faut alors utiliser if/else/else if
  // En gros ce qui est écrit ci-dessous ne fonction pas ! Il ne tient pas
  // compte du OU.
  switch (x) {
    case 82 || 114:
      couleur = "red";
      break;
    case 74 || 106:
      couleur = "yellow";
      break;
    case 86 || 118:
      couleur = "green";
      break;
    case 66 || 98:
      couleur = "white";
      break;
    default :
      console.log(`Touche ${String.fromCharCode(x)} = ${x}`);
  }
  var para = document.getElementsByTagName("div");
  for (var i = 0; i < para.length; i++) {
    para[i].style.backgroundColor = couleur;
  }
}

// Création de l'événement
document.addEventListener("keypress", couleurs);

