var backgroundColor = prompt("Choisissez une couleur pour le fond du texte (en anglais; svp): ");
var textColor = prompt("Choisissez une couleur pour le texte (en anglais svp) ");
var divElts = document.getElementsByTagName("div");
for (i = 0; i < divElts.length; i++){
divElts[i].style.color = textColor;
divElts[i].style.backgroundColor = backgroundColor;
}
