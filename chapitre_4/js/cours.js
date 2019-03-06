var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";
pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";

// Accéder au propriété de style d'un élément
var paragraphesElts = document.querySelectorAll("p");
console.log(paragraphesElts[0].style.color);
console.log(paragraphesElts[1].style.color);
console.log(paragraphesElts[2].style.color);

// Accéder aux propriétés style d'un élément définient dans un fichier css
var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle);
console.log(stylePara.color);
