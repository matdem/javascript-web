// Chapitre 3 : Modifier la structure d'une page web

// Modification du contenu HTML de la liste : ajout d'un langage
/*document.getElementById("langages").innerHTML = '';*/

// Modification du contenu textuel du premier titre
document.querySelector("h1").textContent += " de programmation";

// Définition de l'attribut "id" du premier titre
/*document.querySelector("h1").setAttribute("id", "titre");*/
document.querySelector("h1").id = "titre";

// Modification de la class de h1
var titreElt = document.querySelector("h1");
titreElt.classList.remove("debut");
titreElt.classList.add("titre");
console.log(titreElt);

// 3 étapes pour ajouter un nouvel élément:
//   1. Création de l'élément
//   2. Définition des attributs de l'élément
//   3. Insertion du nouvel élément

// Ajout d'un élément li pour le langage Python
var pythonElt = document.createElement("li");
pythonElt.id = "python";
pythonElt.textContent = "Python";
document.getElementById("langages").appendChild(pythonElt);

// Autre variante pour l'ajout d'un élément
var rubyElt = document.createElement("li");
rubyElt.id = "ruby";
rubyElt.appendChild(document.createTextNode("Ruby"));
document.getElementById("langages").appendChild(rubyElt);

// Ajout d'un élément avant un autre élément
var perlElt = document.createElement("li"); // 1. créer l'élément
perlElt.id = "perl"; // 2. Définition des informations : ici le id
perlElt.textContent = "Perl"; // 2. Définition des information : ici le texte
document.getElementById("langages").insertBefore(perlElt, document.getElementById("php")); // 3. Insertion du nouvel élément

// Ajout d'un élément au tout début de la liste avec insertAdjacentHTML
document.getElementById('langages').insertAdjacentHTML('afterBegin', '<li id="javascript">Javascrit</li>');

// Remlacer un noeud existant avec replaceChild
// 1. Création de l'élément
// 2. Définitions des informations
// 3. Remplacement de l'ancien noeud par le nouveau
var bashElt = document.createElement('li'); // 1. Création
bashElt.id = 'bash'; // Définition de l'info id
bashElt.textContent = 'Bash'; // Définition de son contenu textuel
document.getElementById('langages').replaceChild(bashElt, document.getElementById('perl')); // Remplacement du noeud

// Suppression d'un élément à l'aide de removeChild
document.getElementById('langages').removeChild(document.getElementById('bash'));

// Ajout d'un paragraphe contenant un lien
document.getElementById('contenu').insertAdjacentHTML('afterend', '<p>En voici une <a href="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation">liste</a> complète.</p>');
