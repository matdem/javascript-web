// Exercice 2: Game of Thrones
// Consignes:
// 1. Insérer dans le menu déroulant existant le nom des familles de Game of Thrones
// 2. Lorsqu'on clique sur la famille, une liste des membres apparait sous le menu déroulant sous la forme de liste à puce.

// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}

// Créer une boucle forEach pour mettre le nom des maisons dans la liste déroulante
maisons.forEach(nom => {
  // Créer un nouvel élément dans le DOM de la liste déroulante
  let optionElt = document.createElement('option');
  // Définitions des attributs
  optionElt.id = nom.nom;
  optionElt.value = nom.code;
  optionElt.textContent = nom.nom;
  // Insertion dans le DOM
  document.getElementById('maison').appendChild(optionElt);

  document.getElementById('maison').addEventListener('change', function(e) {
    //Nouvel élément li pour lister personnages
    let liElt = document.createElement('li');
    let CodeMaison = e.target.value;
    
});
