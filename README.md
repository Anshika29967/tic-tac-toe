# Tic Tac Toe

## Overview
This project is a simple implementation of the classic Tic Tac Toe game using HTML, CSS, and JavaScript. The game allows two players to take turns marking spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.

## Features
- **Interactive Gameplay**: Players can click on cells to make their moves.
- **Win Detection**: The game detects and announces when a player has won.
- **Draw Detection**: The game detects and announces when the game is a draw.
- **Responsive Design**: The game layout adjusts to different screen sizes.

## Files
- `index.htm`: The HTML file that sets up the structure of the game.
- `styles.css`: The CSS file that styles the game board and cells.
- `script.js`: The JavaScript file that contains the game logic.

## Implementation Details

### HTML (`index.htm`)
The HTML file contains the structure of the Tic Tac Toe game, including the game board with cells.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="game">
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
    </div>
    <script src="script.js"></script>
</body>
</html>

### CSS (`styles.css`)
The CSS file contains the structure of the Tic Tac Toe game, including the game board with cells.
```CSS
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}

#game {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 5px;
}

.cell {
    width: 100px;
    height: 100px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;
    border: 1px solid #ccc;
}

### JavaScript (`script.js`)
The JavaScript file contains the structure of the Tic Tac Toe game, including the game board with cells.
```JavaScript
const cells = document.querySelectorAll('[data-cell]');
let currentTurn = 'X';

cells.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e) {
    const cell = e.target;
    cell.innerText = currentTurn;
    if (checkWin(currentTurn)) {
        alert(`${currentTurn} wins!`);
    } else if (isDraw()) {
        alert('Draw!');
    } else {
        currentTurn = currentTurn === 'X' ? 'O' : 'X';
    }
}

function checkWin(currentTurn) {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].innerText === currentTurn;
        });
    });
}

function isDraw() {
    return [...cells].every(cell => {
        return cell.innerText === 'X' || cell.innerText === 'O';
    });
}

