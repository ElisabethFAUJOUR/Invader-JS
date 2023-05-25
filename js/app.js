// Selection de la div id=invader
const invaderDiv = document.getElementById('invader');


// Création de la grille avec les 8 * 8 pixels
for (let i = 0; i < 64; i++) { /*Boucle pour générer les 64 pixels*/
  const cell = document.createElement('div'); /*Création de la div pour créer un pixel*/
  cell.classList.add('cell'); /*Ajouter une classe "cell" sur cette div*/
  invaderDiv.appendChild(cell); /*Ajouter de la div class="cell" dans la div id="invader"*/
}

