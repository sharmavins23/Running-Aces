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

    // Disable start button, enable flip button
    document.getElementById("startButton").disabled = true;
    document.getElementById("flipButton").disabled = false;
    document.getElementById("autoplayButton").disabled = false;

    // Lock radio buttons
    lockRadioButtons();

    // Reshuffle all cards
}

// ===== Helper functions ======================================================

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

// Lock all radio buttons
function lockRadioButtons() {
    // Get all radio button elements
    let radioButtons = document.getElementsByName("bets");

    // Iterate through and lock each
    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].disabled = true;
    }
}

// Handle radio button clicks
function onRadioButtonClick() {
    // Enable the start game button
    document.getElementById("startButton").disabled = false;
}