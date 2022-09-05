// Handles the game board and flip functionality

// ===== Constant values =======================================================

// Positions of all aces
var ACEPOSITIONS = [6, 6, 6, 6];
// Flipped side cards tracker
var SIDECARDINDEX = 5;

// ===== Main code =============================================================

// Initialize ace trackers
function initializeAceTrackers() {
    // Update the trackers back to the start position
    ACEPOSITIONS = [6, 6, 6, 6];

    // Reset the side card index
    SIDECARDINDEX = 5;
}

// End the game
function endGame(suit) {
    // Update the game started to false
    GAMESTARTED = false;

    let winRadioButton = document.getElementById(`${suit}s_bet`);
    if (winRadioButton.checked) {
        displaySuccessMessage("You win!");
    } else {
        displayErrorMessage("You lose!");
    }

    // Disable the flip button
    document.getElementById("flipButton").disabled = true;
}

// ===== Flip code =============================================================

// On flip...
function flipCard() {
    // If the game hasn't started, return
    if (!GAMESTARTED) {
        displayErrorMessage("Start game.");
        return;
    }

    // Pull the most recent card from the deck
    let card = DECK.pop();
    placeCard(card, 6, 4); // Place it on the table
    // Cut the string up to the underline to get the suit
    let suit = card.substring(0, card.indexOf("_"));

    // Move the corresponding card
    if (suit == "joker") {
        if (card == "joker_black") {
            moveAce("club", 1);
            moveAce("spade", 1);
        } else {
            moveAce("diamond", 1);
            moveAce("heart", 1);
        }
    } else {
        moveAce(suit, 1);
    }

    // Check the flipped side cards
    // Get the maximal position of all aces
    let maxAcePosition = Math.max(...ACEPOSITIONS);
    if (maxAcePosition == SIDECARDINDEX && SIDECARDINDEX > 0) {
        // Save the side card
        let sideCard = TABLESIDECARDS.pop();
        let suit = sideCard.substring(0, sideCard.indexOf("_"));

        // Update the side card
        placeCard(
            sideCard,
            SIDECARDINDEX,
            4
        );
        SIDECARDINDEX--;

        // Move the corresponding card
        if (suit == "joker") {
            if (card == "joker_black") {
                moveAce("club", -1);
                moveAce("spade", -1);
            } else {
                moveAce("diamond", -1);
                moveAce("heart", -1);
            }
        } else {
            moveAce(suit, -1);
        }


    }

    let suits = ["club", "diamond", "heart", "spade"];
    // Check if the game is over
    for (let i = 0; i < 4; i++) {
        if (ACEPOSITIONS[i] == 0) {
            endGame(suits[i]);
        }
    }
}