//ETAPE 1 FONCTON GENERER UNE GRILLE 

function createGrid(gridSize, cellSize) {
  
  /*Selection de la div id=invader*/
  const invaderDiv = document.getElementById('invader');

  /*Appliquer le CSS pour la grille grid*/
  invaderDiv.style.display = 'grid';
  invaderDiv.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}px)`;
  invaderDiv.style.gridTemplateRows = `repeat(${gridSize}, ${cellSize}px)`;

  /*Supprimer le contenu précédent de la div*/
  invaderDiv.innerHTML = '';

  /*Boucle pour générer la grille*/
  for (let i = 0; i < gridSize * gridSize; i++) { 
    const cellDiv = document.createElement('div'); /*Création de la div pour créer un pixel*/
    cellDiv.classList.add('cell'); /*Ajouter une classe 'cell' sur cette div*/
    cellDiv.style.backgroundColor = 'rgb(210, 218, 226)'; /*Background gris/*/
    cellDiv.style.width = `${cellSize}px`; /*Largeur de la cell*/
    cellDiv.style.height = `${cellSize}px`; /*Hauteur de la cell*/
    invaderDiv.appendChild(cellDiv); /*Ajouter de la div class='cell' dans la div id='invader'*/
    cellDiv.addEventListener('click', changeCellColor);/*Ajouter de l'evenement clic*/
  }
}

createGrid(8, 25);


//ETAPE 3 CONFIG DU FORMULAIRE

/*Selectionner le formulaire*/
const configForm = document.querySelector('.configuration'); /*Selectionner la div form*/

/*Créer 2 input et 1 bouton*/
const gridSizeInput = document.createElement('input'); 
const cellSizeInput = document.createElement('input'); 
const button = document.createElement('button'); 

/*Ajouter le type aux input*/
gridSizeInput.setAttribute('type', 'number');
cellSizeInput.setAttribute('type', 'number');

/*Leur ajouter des class*/ 
gridSizeInput.classList.add('grid-size'); 
cellSizeInput.classList.add('cell-size'); 
button.classList.add('submit-form'); 

/*Ajouter du contenu au bouton*/ 
button.textContent = 'Valider';

/*Ajouter les div au formulaire*/
configForm.appendChild(gridSizeInput); 
configForm.appendChild(cellSizeInput); 
configForm.appendChild(button);

/*Evenement quand on submit le formulaire => générer une nouvelle grille en prenant en compte la valeur saisie dans l'input*/
button.addEventListener('click', function (event) {
  event.preventDefault();
  const gridValue = parseInt(document.querySelector('.grid-size').value);
  const cellValue = parseInt(document.querySelector('.cell-size').value);
  createGrid(gridValue,cellValue);
});

//ETAPE 2 FONCTION CHANGER LA COULEUR LORS DU CLIC

function changeCellColor(event) {
  const backgroundColor = event.target.style.backgroundColor;
  if (backgroundColor === 'rgb(210, 218, 226)') {
    event.target.style.backgroundColor = 'black';
  } else {
    event.target.style.backgroundColor = 'rgb(210, 218, 226)';
  }
}
