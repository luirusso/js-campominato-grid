/**
 * Consegna
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range (vedi immagine allegata):
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Consigli del giorno:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.

Piccolo reminder per ricordarvi i settings per le difficoltà:
con difficoltà 1 (easy) => tra 1 e 100
con difficoltà 2 (medium) => tra 1 e 81
con difficoltà 3 (hard) => tra 1 e 49
l'idea è che se il giocatore ha più quadrati il gioco è più semplice perché è minore la probabilità di beccare una bomba, attenti a non invertire le difficoltà!
 */

const playBtn = document.querySelector('.btn-play');
const difficultyLevel = document.getElementById('difficulty');
const gridContainer = document.querySelector('.grid-container');

// Set grid

playBtn.addEventListener('click', () => {
    
    // Set grid dimensions
    const gridDimension = difficultyLevel.value;
    console.log(gridDimension);
    let cellsNumber;
    let cellsPerSide;

    switch (gridDimension) {
        case '1':
            cellsNumber = 100;
            cellsPerSide = 10;
            break;
        
        case '2':
            cellsNumber = 81;
            cellsPerSide = 9;
            break;

        case '3':
            cellsNumber = 49;
            cellsPerSide = 7;
    }
    console.log(cellsNumber);
    console.log(cellsPerSide);


    // Generating grid parent

    const grid = document.createElement('div');
    grid.classList.add('grid');

    // Injecting grid
    
    gridContainer.append(grid);

    // Generating grid square

    const numList = [];

    for (let i = 1; i <= cellsNumber; i++) {
        // Generate random numbers for squares
        const num = getRandomNumber(numList, 1, cellsNumber);
    }
    console.log(numList);
});


/**
 *  Generating random number
 */

function getRandomNumber(list, min, max) {

    // Loop until new number is not already in list
    let number = 0;

    do {
        number = Math.floor( Math.random() * (max - min + 1)) + min;
    } while( list.includes(number) );

    return number;
}

/**
 *  Generating squares
 */

function createGridSquare(num, cells) {
    
    // Even or odd?

    const type = (num % 2 === 0) ? 'even' : 'odd';

    // Create square node

    const node = document.createElement('div');
    node.classList.add('square', `square-${type}`);
}