const app = {
  invaderDiv: null,

  currentColor:'empty',

  styles: [
    'plain',
    'empty',
    'light',
    'highlight',
  ],

  /*----FONCTON EVENEMENT ClICK COULEUR----*/
  handleCellClick: function (event) {
    event.target.className = `cell ${app.currentColor}`;
  },


  /*----FONCTON CREER UNE GRILLE----*/
  createGrid: function (gridSize, cellSize) {
    //Modifier la taille de la grille
    app.invaderDiv.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}px)`;
    app.invaderDiv.style.gridTemplateRows = `repeat(${gridSize}, ${cellSize}px)`;
    //Supprimer le contenu précédent de la div
    app.invaderDiv.innerHTML = '';
    //Boucle pour générer la grille
    for (let i = 0; i < gridSize * gridSize; i++) {
      const cellDiv = document.createElement('div'); //Création de la div pour créer un pixel
      cellDiv.classList.add('cell', 'empty'); //Ajouter une classe 'cell' sur cette div
      cellDiv.style.width = `${cellSize}px`; //Largeur de la cell
      cellDiv.style.height = `${cellSize}px`; //Hauteur de la cell
      cellDiv.addEventListener('click', app.handleCellClick);
      app.invaderDiv.appendChild(cellDiv); //Ajouter de la div class='cell' dans la div id='invader'
    }
  },

  /*----FONCTON INIT----*/
  init: function () {
    // Récupération de la div invader après chargement du DOM
    app.invaderDiv = document.getElementById('invader');
    // Création de la grille après avoir récupéré invaderDiv
    app.createGrid(8, 25);

    /*----PALETTE DE COULEUR----*/
    const paletteDiv = document.querySelector('.palette');
    for(const colorString of app.styles){
      const colorCircle = document.createElement('div');
      colorCircle.classList.add('palette-color', colorString);
      colorCircle.addEventListener('click', ()=>{
        app.currentColor = colorString;
      });
      paletteDiv.appendChild(colorCircle);
    }
    
    /*----CONFIG DU FORMULAIRE----*/
    //Selectionner le formulaire
    const formConfig = document.querySelector('.configuration');

    //Créer 2 input et 1 bouton* et ajouter leurs attributs types/id/name* avec la méthode setAttribute
    /****INPUT gridSize****/
    const gridSizeInput = document.createElement('input');

    gridSizeInput.type ="number";
    gridSizeInput.name ="gridSize";
    gridSizeInput.id ="gridSize";
    gridSizeInput.placeholder ="Taille de la grille";

    formConfig.appendChild(gridSizeInput);

    /****INPUT cellSize****/
    const cellSizeInput = document.createElement('input');

    cellSizeInput.type ='number';
    cellSizeInput.name ='cellSize';
    cellSizeInput.id ='cellSize';
    cellSizeInput.placeholder ='Taille d\'une cellule';

    formConfig.appendChild(cellSizeInput);

    /****BUTTON****/
    const button = document.createElement('button');

    button.type = 'submit';
    button.id = 'submitForm';
    button.textContent = 'Valider';

    formConfig.appendChild(button);

    //Evenement quand on submit le formulaire => générer une nouvelle grille en prenant en compte la valeur saisie dans l'input
    button.addEventListener('click', function (event) {
      event.preventDefault();
      const gridValue = parseInt(document.getElementById('gridSize').value);
      const cellValue = parseInt(document.getElementById('cellSize').value);
      app.createGrid(gridValue, cellValue);
    });
  }
};

window.addEventListener('DOMContentLoaded', app.init);