//ETAPE 1 = Générer la grille de pixel 

/*Selection de la div id=invader*/
const invaderDiv = document.getElementById('invader');


/*Création de la grille avec les 8 * 8 pixels*/
for (let i = 0; i < 64; i++) { /*Boucle pour générer les 64 pixels*/
  const cellDiv = document.createElement('div'); /*Création de la div pour créer un pixel*/
  cellDiv.classList.add('cell'); /*Ajouter une classe "cell" sur cette div*/
  invaderDiv.appendChild(cellDiv); /*Ajouter de la div class="cell" dans la div id="invader"*/
}


//ETAPE 2 = changer la couleur du pixel lors d'un clic 

/*Fonction pour changer de couleur le background en noir si le background est gris*/
function changeCellColor(event) {
  const backgroundColor = event.target.style.backgroundColor;
  if (backgroundColor === "#d2dae2") {
    event.target.style.backgroundColor = "black";
  } else {
    event.target.style.backgroundColor = "#d2dae2";
  }
}

/*Selection de toutes les div cell*/
const cells = document.querySelectorAll('.cell');

/*Boucle pour ajouter un evenement lors du clic souris chaque cell (sur chaque pixel)*/
for (const cell of cells) {
  cell.addEventListener('click', changeCellColor);
  console.log(cell);
}






