const app = {
  invaderDiv: null,

  /*----FONCTON EVENEMENT ClICK COULEUR----*/
  handleCellClick: function (event) {
    event.target.classList.toggle('black');
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
      cellDiv.classList.add('cell'); //Ajouter une classe 'cell' sur cette div
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
    /*----CONFIG DU FORMULAIRE----*/
    //Selectionner le formulaire
    const formConfig = document.querySelector('.configuration');

    //Créer 2 input et 1 bouton* et ajouter leurs attributs types/id/name* avec la méthode setAttribute
    /****INPUT gridSize****/
    const gridSizeInput = document.createElement('input');

    gridSizeInput.setAttribute('type', 'number');
    gridSizeInput.setAttribute('name', 'gridSize');
    gridSizeInput.setAttribute('id', 'gridSize');
    gridSizeInput.setAttribute('placeholder', 'Taille de la grille');

    formConfig.appendChild(gridSizeInput);

    /****INPUT cellSize****/
    const cellSizeInput = document.createElement('input');

    cellSizeInput.setAttribute('type', 'number');
    cellSizeInput.setAttribute('name', 'cellSize');
    cellSizeInput.setAttribute('id', 'cellSize');
    cellSizeInput.setAttribute('placeholder', 'Taille d\'une cellule');

    formConfig.appendChild(cellSizeInput);

    /****BUTTON****/
    const button = document.createElement('button');

    button.setAttribute('type', 'submit');
    button.setAttribute('id', 'submitForm');
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