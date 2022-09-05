// Handles all card shuffling and card storage

// ===== Constant values =======================================================

var deck = []; // The deck of cards
var tableSideCards = []; // The cards on the side of the table

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
    deck = [];
    let suits = ["club", "diamond", "heart", "spade"];
    let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

    // Iterate through the suits and values, creating a card for each
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(`${suits[i]}_${values[j]}`);
        }
    }

    // Add the jokers
    deck.push("joker_red");
    deck.push("joker_black");
}

// Shuffle the deck of cards (Fisher-Yates shuffle)
function shuffleDeck() {
    let currentIndex = deck.length;
    let randomIndex;

    // While there remaining elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap it with the current element
        [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
    }
}

// Pick the top six cards from the deck and place them into the table side
function pickTableSideCards() {
    // Iterate through the table
    for (let i = 1; i <= 6; i++) {
        // Pick the top card from the deck
        tableSideCards.push(deck.pop());
    }
}