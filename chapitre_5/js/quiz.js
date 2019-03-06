// Exercice 5.4 : Quiz interactif (quiz.js)
// Page avec des questions et un bouton "Afficher la réponse" qui affice la réponse lorsqu'on clique dessus.

// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
  {
    enonce: "Combien font 2+2 ?",
    reponse: "2+2 = 4"
  },
  {
    enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
    reponse: "1492"
  },
  {
    enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
    reponse: "La lettre N"
  }
];

for (var i = 0; i < questions.length; i++) {
  // Créer le no de la question + l'énoncé (avec .innerHTML)
  var Q = document.createElement("p");
  Q.innerHTML += "<strong>Question " + String(i+1) + ": </strong>" + questions[i].enonce;
  document.getElementById("contenu").appendChild(Q);

  // Créer un bouton "Afficher la réponse"
  var bouton = document.createElement("button");
  bouton.textContent = "Afficher la réponse";
  bouton.id = i; // Servira à associer la réponse avec le bon bouton
  document.getElementById("contenu").appendChild(bouton);

  // Ajouter l'événement au bouton
  document.getElementsByTagName("button")[i].addEventListener("click", function(e) {
    // Créer la fonction qui affichera la réponse
    var R = document.createElement("p");
    R.textContent = questions[Number(e.target.id)].reponse;
    document.getElementById("contenu").insertBefore(R, document.getElementsByTagName("button")[Number(e.target.id)]);
    document.getElementById("contenu").removeChild(e.target);
  });
}
