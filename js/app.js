//ETAPE 1 = Générer la grille de pixel 

/*Selection de la div id=invader*/
const invaderDiv = document.getElementById("invader");


/*Création de la grille avec les 8 * 8 pixels*/
for (let i = 0; i < 64; i++) { /*Boucle pour générer les 64 pixels*/
  const cellDiv = document.createElement("div"); /*Création de la div pour créer un pixel*/
  cellDiv.classList.add("cell"); /*Ajouter une classe "cell" sur cette div*/
  cellDiv.style.backgroundColor = "rgb(210, 218, 226)"; /*Ajouter un background gris/*/
  invaderDiv.appendChild(cellDiv); /*Ajouter de la div class="cell" dans la div id="invader"*/
}


//ETAPE 2 = changer la couleur du pixel lors d'un clic 

/*Fonction pour changer de couleur le background en noir si le background est gris*/
function changeCellColor(event) {
  const backgroundColor = event.target.style.backgroundColor;
  if (backgroundColor === "rgb(210, 218, 226)") {
    event.target.style.backgroundColor = "black";
  } else {
    event.target.style.backgroundColor = "rgb(210, 218, 226)";
  }
}

/*Selection de toutes les div cell*/
const cells = document.querySelectorAll('.cell');

/*Boucle pour ajouter un evenement lors du clic souris chaque cell (sur chaque pixel)*/
for (const cell of cells) {
  cell.addEventListener('click', changeCellColor);
}


//ETAPE 3 = configuration du Formulaire 

/*Ajouter un champ input pour choisir la taille de la grille*/
const configForm = document.querySelector('.configuration'); /*Selectionner la div form*/

const inputDiv = document.createElement('input'); /*Création de la div input*/
inputDiv.classList.add('grid-size'); /*Ajouter une classe "inputGrid" sur cette div*/
configForm.appendChild(inputDiv); /*Ajout de l'input dans le formulaire*/

/*Ajoute un bouton pour valider*/
const button = document.createElement('button'); /*Création de la div button*/
button.classList.add('submit-form'); /*Ajouter une classe "inputGrid" sur cette div*/
button.textContent = "Valider";
configForm.appendChild(button); /*Ajout du bouton dans le formulaire*/

/*Lorsqu'on soumet le formulaire on veut générer une nouvelle grille à la place de la grille actuelle, mais en tenant compte de la taille saisie dans le champ*/
/*Evenement submit => nouvelle grille en prenant en compte la valeur saisie dans l'input*/





/*Ajouter un champ input pour choisir la taille en Px de la cell*/
// cellSize



