// Contains code for loading up the window (and refreshing the game state)

// ===== Constant values =======================================================

var CARDSCALING = 0.60; // Percent sizing for all cards

// ===== Main code and table functionality =====================================

// Initialize all systems
function initializeSystems() {
    // Initialize the flavortext system
    initializeFlavorTextSystems();

    // Initialize the aces tracking system
    initializeAceTrackers();

    // Finally, refresh the game state
    refreshGameState();
}

// Refresh the entire game state
function refreshGameState() {
    // Start by clearing the table
    clearTable();

    // Reload aces to the base state
    placeAces();

    // Initialize the aces tracking system
    initializeAceTrackers();

    // Place the card backs on the table to align them
    placeCardBacks();

    // Initialize card systems
    initializeCardSystems();

    // Clear the radio buttons
    clearRadioButtons();

    // Disable flip and start buttons
    document.getElementById("flipButton").disabled = true;
    document.getElementById("startButton").disabled = true;
    document.getElementById("autoplayButton").disabled = true;

    // Set the game started to false
    GAMESTARTED = false;

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

// Clear all radio button selections (AND unlock them)
function clearRadioButtons() {
    // Get all radio buttons
    let radioButtons = document.getElementsByName("bets");

    // Iterate through the radio buttons
    for (let i = 0; i < radioButtons.length; i++) {
        // Uncheck the radio button
        radioButtons[i].checked = false;
        radioButtons[i].disabled = false;
    }
}