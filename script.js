console.log('JS OK!');

// Creare una griglia di gioco quadrata, in cui ogni cella contiene
// un numero tra quelli compresi in un range compreso tra 1 e 100
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// BONUS:
// L'utente indica un livello di difficoltà, in base al livello scelto
// la griglia conterrà un range diverso:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

// preparazione all'esecuzione del programma

const buttonEasy = document.getElementById('easy');
const buttonMedium = document.getElementById('medium');
const buttonHard = document.getElementById('hard');

buttonEasy.addEventListener('click', () => createElementsInGrid(100, 'easy'));
buttonMedium.addEventListener('click', () => createElementsInGrid(81, 'medium'));
buttonHard.addEventListener('click', () => createElementsInGrid(49, 'hard'));




function createElementsInGrid(totalCells, pippo) {
    // configurazione del programma (per il bonus)
    // const totalCells = 100; -> glielo passo come parametro su argomento

    // 1. recupero la griglia con l'id
    const grid = document.getElementById('grid');

    // resetto il contenuto della criglia
    grid.innerHTML = '';

    // 2. creo N(in questo caso 100) div all'interno della griglia

    for (let i = 0; i < totalCells; i++) {
        //      2a. creo l'elemento
        const cell = document.createElement('div');
        //      2b. aggiungo eventuali classi CSS per dargli uno stile
        cell.className = 'cell';
        cell.classList.add(pippo);
        //      2c. associamo il numero da 1 a 100 al testo contenuto nella cella
        cell.innerText = i + 1;
        //      2d. aggiungo l'elemento creato alla griglia 
        grid.appendChild(cell);
        //      2e. aggiungo un Listener sul click dell'elemento
        cell.addEventListener('click', () => {
            //          2e-pt1. se non ha già lo sfondo azzurro lo metto    
            //          2e-pt2. se è già azzurro tolgo il colore dallo sfondo    
            cell.classList.toggle('bg-blue');
        })
    }
}

// BONUS:
// 1. recupero gli elementi bottone
// 2. aggiungo un listener al click ad ogni bottone
//      al click chiamo una funzione che genera la griglia (vedi sopra)
//      con 49,81 o 100 celle in base al bottone cliccato.