// let fruits = ["pastèque", "melon", "framboise"];
//
// function afficherFruit(fruitEte) {
//   alert(fruitEte);
//   pour chaque élément de la liste fruits, je crée une alert de cet élément = j'affiche un fruitEte
// }
//
// fruits.forEach(afficherFruit);


/* À compléter : quand on clique sur le bouton
"Remplir l'âge de tout le monde",
tous les champs "Âge" de la page contiennent
alors le nombre "20". */

document.querySelector('.age-btn').addEventListener('click', function() {
  //quand on clique sur le bouton nommé age-btn
  let inputElementsList = document.querySelectorAll('.input-age');
  //on récupère tous les champs âge de la page ; et je les nomme inputElementsList (qui est une variable)
  inputElementsList.forEach(function(inputElement) {
    inputElement.value = '20';
  // pour chaque champ âge de la liste âges, on lui donne la valeur de 20
  });
});

document.querySelector('.age-btn').addEventListener('click', function() {
  let ageParDefaut = document.querySelector('.input-agedefaut').value;
  let inputElementsList = document.querySelectorAll('.input-age');

  inputElementsList.forEach(function(inputElement) { //pour chaque case de tous les champs input-age appliquer...
    inputElement.value = ageParDefaut; //...la valeur d'inputElement qui est ageParDefaut soit ce qui apparaît dans le champ âge par défaut
    });
  });

  //on applique la valeur inputElement / ageParDefaut dans tous les champs input-age

//avec checkboxes en plus
  document.querySelector('.ppal-box').addEventListener('click', function() {
    let boxes = document.querySelectorAll('.box');
    let firstBox = document.querySelector('.ppal-box').checked;
    boxes.forEach(function(cocherBoxes) {
      cocherBoxes.checked = firstBox;
    });
  });


  function remplirCasesAge() {
    inputElementsList.forEach
  }
