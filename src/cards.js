// Handles all card shuffling and card storage

// ===== Constant values =======================================================

var DECK = []; // The deck of cards
var TABLESIDECARDS = []; // The cards on the side of the table

// ===== Main code =============================================================

// Initialize all card systems
function initializeCardSystems() {
    // Create a new deck
    createNewDeck();

    // Shuffle this deck
    shuffleDeck();

    // Pick the top six into the table side cards
    pickTableSideCards();
}

// Create a new deck of cards
function createNewDeck() {
    // Create a new deck
    DECK = [];
    let suits = ["club", "diamond", "heart", "spade"];
    let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

    // Iterate through the suits and values, creating a card for each
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            DECK.push(`${suits[i]}_${values[j]}`);
        }
    }

    // Add the jokers
    DECK.push("joker_red");
    DECK.push("joker_black");
}

// Shuffle the deck of cards (Fisher-Yates shuffle)
function shuffleDeck() {
    let currentIndex = DECK.length;
    let randomIndex;

    // While there remaining elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap it with the current element
        [DECK[currentIndex], DECK[randomIndex]] = [DECK[randomIndex], DECK[currentIndex]];
    }
}

// Pick the top five cards from the deck and place them into the table side
function pickTableSideCards() {
    // Iterate through the table
    for (let i = 1; i <= 5; i++) {
        // Pick the top card from the deck
        TABLESIDECARDS.push(DECK.pop());
    }
}

// ===== Card display functions ================================================

// Given some basic information, create a card
function createCard(cardValue, fill = "") {
    // Create the card
    let card = `
        <svg
            width="${170 * CARDSCALING}"
            height="${245 * CARDSCALING}"
        >
            <use
                href="assets/svg-cards.svg#${cardValue}"`;

    // Add the fill if it exists
    if (fill != "") {
        card += `fill="${fill}"`;
    } else {
        card += `fill="${fill}"`;
    }

    // Finish the card
    card += ` transform="scale(${CARDSCALING})"
            />
        </svg>`;

    return card;
}

// Place a card in a particular position
function placeCard(cardValue, row, column, fill = "") {
    // Get the cell's document ID
    let cell = document.getElementById("tabler" + row + "c" + column);

    // Place the card
    cell.innerHTML = createCard(cardValue, fill);
}

// Move a card from one position to another
function moveCard(fromRow, fromColumn, toRow, toColumn) {
    // Get the cell's document ID
    let fromCell = document.getElementById("tabler" + fromRow + "c" + fromColumn);
    let toCell = document.getElementById("tabler" + toRow + "c" + toColumn);

    // Move the card
    toCell.innerHTML = fromCell.innerHTML;
    fromCell.innerHTML = "";
}

// Move a particular ace
function moveAce(suit, direction) {
    let suits = ["club", "diamond", "heart", "spade"];

    // Get the current position of the ace
    let cardColumn = suits.indexOf(suit);
    let cardRow = ACEPOSITIONS[cardColumn];

    // Move the ace
    if (direction == 1) {
        // Check bounds
        if (cardRow == 0) return;

        // Move the ace up
        moveCard(cardRow, cardColumn, cardRow - 1, cardColumn);
        ACEPOSITIONS[cardColumn]--;
    } else {
        // Check bounds
        if (cardRow == 6) return;

        // Move the ace down
        moveCard(cardRow, cardColumn, cardRow + 1, cardColumn);
        ACEPOSITIONS[cardColumn]++;
    }
}

// Place aces into the base game state
function placeAces() {
    // Save suits as an array
    let suits = ["club", "diamond", "heart", "spade"];

    // Iterate through the suits
    for (let i = 0; i < suits.length; i++) {
        // Get the cell's document ID
        let cell = document.getElementById("tabler6c" + i);

        // Place the ace
        cell.innerHTML = createCard(`${suits[i]}_1`);
    }
}

// Place card backs on the table to align cells
function placeCardBacks() {
    // Iterate through the table
    for (let i = 1; i <= 6; i++) {
        // Get the cell's document ID
        let cell = document.getElementById("tabler" + i + "c4");

        // Place the card back
        cell.innerHTML = createCard("back", "MidnightBlue");
    }

    // Place the first card as a blank one
    let cell = document.getElementById("tabler0c4");
    cell.innerHTML = createCard("blank");
}