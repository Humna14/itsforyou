function showYesScreen() {
    var originalScreen = document.getElementById('original-screen');
    var yesScreen = document.getElementById('yes-screen');

    // Hide the original screen
    originalScreen.style.display = 'none';

    // Display the Yes screen
    yesScreen.style.display = 'flex';
}

function moveNoButton() {
    var noButton = document.getElementById('no-button');
    var newPositionX = Math.floor(Math.random() * window.innerWidth);
    var newPositionY = Math.floor(Math.random() * window.innerHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = newPositionX + 'px';
    noButton.style.top = newPositionY + 'px';
}
