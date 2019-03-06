// Chapitre 6 : Les formulaires

// Les zones textes
// Accéder à la zone de saisie
let pseudoElt = document.getElementById("pseudo");
pseudoElt.value = "Mon pseudo";

// Gestion du focus
// Affichage d'un message contextuel pour la saisie du pseudo
pseudoElt.addEventListener("focus", function() {
  document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});
// Suppression du message contextuel pour la saisie du pseudo
pseudoElt.addEventListener("blur", function(e) {
  document.getElementById("aidePseudo").textContent = "";
});
// Focus sur la zone de saisie du pseudo
pseudoElt.focus();

// Les éléments d'options
// Cases à cocher
// Affichage de la demande de confirmation d'inscription
document.getElementById('confirmation').addEventListener('change', function(e) {
  console.log("Demande de confirmation : " + e.target.checked);
});

// Boutons radios
// Affichage du type d'abonnement choisi
let aboElts = document.getElementsByName("abonnement");
for (var i = 0; i < aboElts.length; i++) {
  aboElts[i].addEventListener("change", function(e) {
    console.log("Formule d'abonnement choisi : " + e.target.value);
  });
}

// Liste déroulantes
// Affichage du code de nationalité choisi
document.getElementById("nationalite").addEventListener("change", function(e) {
  console.log("Code de nationalité :  " + e.target.value);
});

// Accès aux champs du formulaire
let form = document.querySelector("form");
console.log("Nombre de champs de saisie : " + form.elements.length);
console.log(form.elements[0].name);
console.log(form.elements.mdp.type);

// Soumission du formulaire
// Affichage de toutes les données saisies ou choisies
form.addEventListener("submit", function(e) {
  let pseudo = form.elements.pseudo.value;
  let mdp = form.elements.mdp.value;
  let courriel = form.elements.courriel.value;
  console.log(`Vous avez choisi le pseudo ${pseudo}, le mot de passe ${mdp} et le courriel ${courriel}`);
  if (form.elements.confirmation.checked) {
    console.log(`Vous avez demandé une confirmation d'inscription par courriel`);
  } else {
    console.log(`Vous n'avez pas demandé de confirmation d'inscription par courriel`);
  }
  switch (form.elements.abonnement.value) {
    case "abonewspromo":
      console.log(`Vous êtes abonné(e) à la newslettre et aux promotions`);
      break;
    case "abonews":
      console.log(`Vous êtes abonné(e) à la newsletter`);
      break;
    case "aborien":
      console.log(`Vous n'avez pris aucun abonnement`);
      break;
    default:
      console.log(`Erreur: code d'abonnement non reconnu`);
  }
  switch (form.elements.nationalite.value) {
    case "FR":
      console.log(`Vous êtes français(e)`);
      break;
    case "BE":
      console.log(`Vous êtes belge.`);
      break;
    case "SUI":
      console.log(`Vous êtes suisse.`);
      break;
    default:
      console.log("Erreur: code de nationalité non reconnu");
  }
  e.preventDefault(); // Annulation de l'envoi des données
});

// Validation des données
// Pendant la saisie avec les événements "input"
// ex.:
document.getElementById("mdp").addEventListener("input", function(e) {
  let mdp = e.target.value; // Valeur saisie dans le champs mdp
  let longueurMdp = "faible";
  let couleurMsg = "red"; // Longueur faible => couleur rouge
  if (mdp.length >= 8) {
    longueurMdp = "suffisante";
    couleurMsg = "green";
  } else if (mdp.length >=4) {
    longueurMdp = "moyenne";
    couleurMsg = "orange";
  }
  let aideMdpElt = document.getElementById("aideMdp");
  aideMdpElt.textContent = `Longueur : ${longueurMdp}`; // Texte de l'aide
  aideMdpElt.style.color = couleurMsg; // Couleur du texte de l'aide
});

// À la fin de la saisie
// Contrôle d'une adresse courrielle en fin de saisie
// 1. avec la méthode JavaScript .indexOf
// document.getElementById("courriel").addEventListener("blur", function(e) {
//   var validiteCourriel = "";
//   if (e.target.value.indexOf("@") === -1) {
//     // Le courriel saisi ne contient pas le caractère 0
//     validiteCourriel = "Adresse invalide";
//   }
//   document.getElementById("aideCourriel").textContent = validiteCourriel;
// });
// Ça fonctionne mais ça manque de précision, car on peut juste marquer @ pour que ce soit ok

// 2. avec un expression régulière
document.getElementById("courriel").addEventListener("blur", function(e) {
  // Correspond à une chaìne de la forme xxx@yyy.zzz
  let regexCourriel = /.+@.+\..+/;
  let validiteCourriel = "";
  if (!regexCourriel.test(e.target.value)) {
    validiteCourriel = "Adresse invalide";
  }
  document.getElementById("aideCourriel"). textContent = validiteCourriel;
});
