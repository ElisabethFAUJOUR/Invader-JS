const app = {
  invaderDiv: null,

  currentColor:'empty',

  styles: [
    'plain',
    'empty',
    'light',
    'highlight',
  ],

  /**
   * Event click color 
   */
  handleCellClick: function (event) {
    event.target.className = `cell ${app.currentColor}`;
  },


  /** 
  * Create a grid of pixel
  * @param {number} gridSize - grid size px 
  * @param {number} cellSiez - cell size px  
  * */
  createGrid: function (gridSize, cellSize) {
    //Modify grid size and grid cell
    app.invaderDiv.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}px)`;
    app.invaderDiv.style.gridTemplateRows = `repeat(${gridSize}, ${cellSize}px)`;
    //Delete div content
    app.invaderDiv.innerHTML = '';
    //Generate the grid
    for (let i = 0; i < gridSize * gridSize; i++) {
      const cellDiv = document.createElement('div'); //Création de la div pour créer un pixel
      cellDiv.classList.add('cell', 'empty'); //Ajouter une classe 'cell' sur cette div
      cellDiv.style.width = `${cellSize}px`; //Largeur de la cell
      cellDiv.style.height = `${cellSize}px`; //Hauteur de la cell
      cellDiv.addEventListener('click', app.handleCellClick);
      app.invaderDiv.appendChild(cellDiv); //Ajouter de la div class='cell' dans la div id='invader'
    }
  },

  init: function () {
    app.invaderDiv = document.getElementById('invader');
    app.createGrid(8, 25);

    /**
    * Color palette
    */
    const paletteDiv = document.querySelector('.palette');
    for(const colorString of app.styles){
      const colorCircle = document.createElement('div');
      colorCircle.classList.add('palette-color', colorString);
      colorCircle.addEventListener('click', ()=>{
        app.currentColor = colorString;
      });
      paletteDiv.appendChild(colorCircle);
    }
    
    /**
    * Form configuration
    */
    const formConfig = document.querySelector('.configuration');

    //INPUT gridSize
    const gridSizeInput = document.createElement('input');

    gridSizeInput.type ='number';
    gridSizeInput.name ='gridSize';
    gridSizeInput.id ='gridSize';
    gridSizeInput.placeholder ='Taille de la grille';

    formConfig.appendChild(gridSizeInput);

    //INPUT cellSize
    const cellSizeInput = document.createElement('input');

    cellSizeInput.type ='number';
    cellSizeInput.name ='cellSize';
    cellSizeInput.id ='cellSize';
    cellSizeInput.placeholder ='Taille d\'une cellule';

    formConfig.appendChild(cellSizeInput);

    //BUTTON
    const button = document.createElement('button');

    button.type = 'submit';
    button.id = 'submitForm';
    button.textContent = 'Valider';

    formConfig.appendChild(button);

    //Listener event submit => generate a new grid with the input value
    button.addEventListener('click', function (event) {
      event.preventDefault();
      const gridValue = parseInt(document.getElementById('gridSize').value);
      const cellValue = parseInt(document.getElementById('cellSize').value);
      app.createGrid(gridValue, cellValue);
    });
  }
};

window.addEventListener('DOMContentLoaded', app.init);