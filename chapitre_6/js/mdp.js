// Exercice mdp.js
// Écrire un test de vérification de mdp lors de la SOUMISSION.
// Dois vérifier:
//   1. Si la saisie et la confirmation son identique
//   2. Si la longueur est d'au moins 6 caractères
//   3. Si il contient au moin 1 chiffre

let mdp1Elt = document.getElementById('mdp1'); 
let mdp2Elt = document.getElementById('mdp2');
let erreurChiffre = '';
let erreurLongueur = '';

mdp1Elt.addEventListener('input', function(e) {
  let mdp = e.target.value;
  if (mdp.length < 6) {
    erreurLongueur = 'Votre mot de passe doit avoir au moins 6 caractères';
  } else {
    erreurLongueur = '';
  }
  let regexMdp = /[0-9]/;
  if (!regexMdp.test(mdp)) {
    erreurChiffre = 'Votre mot de passe doit contenir au moins 1 chiffre.';
  } else {
    erreurChiffre = '';
  }
  document.getElementById('infoMdp').textContent = `${erreurChiffre} ${erreurLongueur}`;
});

mdp2.addEventListener('input', function(e) {
  if (mdp1Elt.value !== mdp2Elt.value) {
    document.getElementById('infoMdp').textContent = 'Erreur : Les deux mots de passe ne sont pas identiques';
  } else {
    document.getElementById('infoMdp').textContent = '';
  }
});
