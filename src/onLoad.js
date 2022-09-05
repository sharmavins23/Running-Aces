// Contains code for loading up the window (and refreshing the game state)

// ===== Constant values =======================================================

var CARDSCALING = 0.6; // Percent sizing for all cards

// ===== Main code and table functionality =====================================

// Initialize all systems
function initializeSystems() {
    // Initialize the flavortext system
    initializeFlavorTextSystems();

    // Finally, refresh the game state
    refreshGameState();
}

// Refresh the entire game state
function refreshGameState() {
    // Start by clearing the table
    clearTable();

    // Reload aces to the base state
    placeAces();

    // Place the card backs on the table to align them
    placeCardBacks();

    // Clear the radio buttons
    clearRadioButtons();

    // Update flavortext to base
    displayBaseMessage();
}

// Clear the entire table, excluding buttons
function clearTable() {
    // Iterate through all rows and columns of the table
    for (let i = 0; i <= 6; i++) { // Rows
        for (let j = 0; j <= 4; j++) { // Columns
            // Get the cell's document ID
            let cell = document.getElementById("tabler" + i + "c" + j);

            // Remove all children of the cell
            while (cell.firstChild) {
                cell.removeChild(cell.firstChild);
            }
        }
    }
}

// Clear all radio button selections
function clearRadioButtons() {
    // Get all radio buttons
    let radioButtons = document.getElementsByName("bets");

    // Iterate through the radio buttons
    for (let i = 0; i < radioButtons.length; i++) {
        // Uncheck the radio button
        radioButtons[i].checked = false;
    }
}

// ===== Helper functions ======================================================

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

// ===== Card placement code ===================================================

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