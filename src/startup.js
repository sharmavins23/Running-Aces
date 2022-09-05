// Handles starting the game and saving game state

// ===== Constant values =======================================================

var GAMESTARTED = false; // Whether the game has started

// ===== Main code =============================================================

// Start the game, if applicable
function startGame() {
    // Check if the game is already started
    if (GAMESTARTED) {
        // Display an error message
        displayErrorMessage("Flip a card.");
        return;
    }

    // Do nothing if no bets were chosen
    if (!checkBetSelected()) return;

    // Set the game as started
    GAMESTARTED = true;
    displayInfoMessage("Game started.");
}

// ===== Checker functions =====================================================

// Check radio buttons to see if a bet is selected
function checkBetSelected() {
    // Get all radio button elements
    let radioButtons = document.getElementsByName("bets");

    // Iterate through and find if any are checked
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            return true;
        }
    }

    // At this point, no bets were selected, so display an error message
    displayErrorMessage("No bet chosen!");
    return false;
}