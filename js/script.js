/*
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del
gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio 
ma solo l’index.html, e le cartelle js/ css/ con i relativi script
e fogli di stile, per evitare problemi con l’inizializzazione di git).
Il computer deve generare 16 numeri casuali compresi nel range della
griglia: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su una cella:
se il numero è presente nella lista dei numeri generati - abbiamo
calpestato una bomba - la cella si colora di rosso e la partita termina,
altrimenti la cella cliccata si colora di azzurro e l’utente può
continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge
il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio,
cioè il numero di volte che l’utente ha cliccato su una cella che
non era una bomba.
*/
gameOver = false;
const bombs = [];

const cellsContainer = document.querySelector(".cells-container");

function generateGrid(horizontalCells, verticalCells) {
    const cellsTotal = horizontalCells * verticalCells;

    cellsContainer.style.width = `calc(var(--cells-size) * ${horizontalCells})`;
    const bombsList = generateBombs(cellsTotal, 16);


    console.log(bombsList);
    for (let i = 1; i <= cellsTotal; i++) {
        
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.indice = i;
        const cellsIndex = cell.dataset.indice;
        cellsContainer.append(cell);
        cell.append(parseInt(i));   

        cell.addEventListener("click", function () {
            console.log(cellsIndex);
            this.classList.add("bg-primary");
            
        })
    }
    generateBombs(cellsTotal, 16);
    console.log(bombs);

    return cellsTotal;
}

function generateBombs(cellsTotal, bombsNumber) {
    

    do {
        const randomBombsNumber = Math.floor(Math.random() * cellsTotal) + 1;
        if (!bombs.includes(randomBombsNumber)) {
            bombs.push(randomBombsNumber);
        }
    } while (bombs.length < bombsNumber);
    
    return bombs;
}

const cellsTotal = generateGrid(10, 10);


