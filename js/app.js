const app = {
  
  defaultGridSize: 8,
  defaultCellSize: 30,

  colors: [
    "red", 
    "blue", 
    "orange", 
    "green", 
    "grey",
    "white"
  ],

  currentColor: "red",

  // ----- init -----

  init() {
    app.createGrid(app.defaultGridSize, app.defaultCellSize);
    app.createColorPalette();
    app.createFormConfig();
    app.listenToFormSubmit();
  },

  // ----- functions -----

  /** 
   * Create a grid of pixel
   * @param {number} gridSize - grid size px 
   * @param {number} cellSiez - cell size px  
   * */
  createGrid(gridSize, cellSize) {
    const invaderElem = document.querySelector("#invader");
    //Delete the previous grid
    invaderElem.innerHTML = "";
    //Modify grid size and grid cell
    invaderElem.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}px)`;
    invaderElem.style.gridTemplateRows = `repeat(${gridSize}, ${cellSize}px)`;
    //Generate the grid
    for (let i = 0; i < gridSize * gridSize; i++) {
      const cellElem = document.createElement("div");
      cellElem.classList.add("cell"); 
      cellElem.style.width = `${cellSize}px`; 
      cellElem.style.height = `${cellSize}px`; 
      invaderElem.appendChild(cellElem); 
    }
    app.listenToCellClick();
  },

  /**
   * Color palette
   */
  createColorPalette() {
    const paletteElem = document.querySelector(".color-palette");
    
    for (const color of app.colors) {
      const colorElem = document.createElement("div");
      colorElem.classList.add("color-picker", color);

      if (color === app.currentColor) { 
        colorElem.classList.add("selected");
      }

      colorElem.addEventListener("click", () => {
        app.currentColor = color;
        document.querySelector(".selected").classList.remove("selected");
        colorElem.classList.add("selected");
      });

      paletteElem.appendChild(colorElem);
    }
  },

  /**
   * Form configuration
   */
  createFormConfig() {
    const formConfig = document.querySelector(".configuration");
    //INPUT gridSize
    const gridSizeInput = document.createElement("input");
    gridSizeInput.type = "number";
    gridSizeInput.name = "gridSize";
    gridSizeInput.id = "gridSize";
    gridSizeInput.placeholder = "Taille de la grille";
    formConfig.appendChild(gridSizeInput);

    //INPUT cellSize
    const cellSizeInput = document.createElement("input");
    cellSizeInput.type = "number";
    cellSizeInput.name = "cellSize";
    cellSizeInput.id = "cellSize";
    cellSizeInput.placeholder = "Taille d'une cellule";
    formConfig.appendChild(cellSizeInput);

    //BUTTON
    const button = document.createElement("button");
    button.type = "submit";
    button.id = "button";
    button.textContent = "Valider";
    formConfig.appendChild(button);
  },

  // ----- listener events -----

  /**
   * Cell click listener
   */
  listenToCellClick() {
    const cellElements = document.querySelectorAll(".cell"); 
    for (const cellElement of cellElements) { 
      cellElement.addEventListener("click", () => { 
        if (cellElement.classList.contains(app.currentColor)) {
          cellElement.classList.remove(app.currentColor);
        } else {
          cellElement.className = `cell ${app.currentColor}`;
        }
      });
    }
  },

  /**
   * Form submit listener to generate a new grid 
   */
  listenToFormSubmit: function () {
    const formElem = document.querySelector(".configuration");
    formElem.addEventListener("submit", (event) => {
      event.preventDefault();
      const gridValue = parseInt(document.querySelector("#gridSize").value);
      const cellValue = parseInt(document.querySelector("#cellSize").value);
      app.createGrid(gridValue, cellValue);
    });
  }
};

// ----- Launch init when DOM is ready -----
window.addEventListener("DOMContentLoaded", app.init);