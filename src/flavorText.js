// Handles all flavor text for the game

// ===== Constant values =======================================================

// Get the DOM element for flavortext displays
var FLAVORTEXT_DOM;

// ===== Initialization ========================================================

// Initialize flavortext messaging system
function initializeFlavorTextSystems() {
    FLAVORTEXT_DOM = document.getElementById("flavorText");
}

// ===== Main code =============================================================

// Display the base message to the user
function displayBaseMessage() {
    // Set the flavor text to the base message
    FLAVORTEXT_DOM.innerHTML = `
        <b>
            <font color="black">
                Pick a bet!
            </font>
        </b>
        `;
}

// Display an error message to the user
function displayErrorMessage(message) {
    // Set the flavor text to the message
    FLAVORTEXT_DOM.innerHTML = `
        <b>
            <font color="red">
                ${message}
            </font>
        </b>
        `;
}

// Display an info message to the user
function displayInfoMessage(message) {
    // Set the flavor text to the message
    FLAVORTEXT_DOM.innerHTML = `
        <b>
            <font color="black">
                ${message}
            </font>
        </b>
        `;
}

// Display a success message to the user
function displaySuccessMessage(message) {
    // Set the flavor text to the message
    FLAVORTEXT_DOM.innerHTML = `
        <b>
            <font color="green">
                ${message}
            </font>
        </b>
        `;
}