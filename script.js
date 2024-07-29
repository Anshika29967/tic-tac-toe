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
