var h = document.head;
console.log(h);

var b = document.body;
console.log(b);

// Test pour savoir quel est le nodeType de body
if (document.body.nodeType === document.ELEMENT_NODE) {
  console.log("body est un noeud élément");
} else {
  console.log("body est un noeud textuel");
};

// Accès au premier noeud enfant du noeud body
console.log(document.body.childNodes[1]);

// Parcourir la liste des noeuds enfants de body
for (var i = 0; i < document.body.childNodes.length; i++) {
  console.log(document.body.childNodes[i]);
}

var h1 = document.body.childNodes[1];
console.log(h1.parentNode);
console.log(document.parentNode);
