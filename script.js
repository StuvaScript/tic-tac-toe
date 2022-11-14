// At the end of each session, if all code is working as planned, merge your
// branch with the main. Actively consider not merging if you think the code
// is too iffy

// Limit the number of letters someone can input for their name so it doesn't
// break the grid layout, make it 8 letters with all letters lowercase accept
// the first letter is capitalized.

//Color the X's and O's red and blue respectively. Probably add a red or blue
// class to HTML that is styled in CSS along with adding the innerText.

// Need to create a player factory function. Might need to attach the players
// to the X's and O's switchSymbol function


const gameBoard = (() => {
    const board = [ , , , , , , , , , ];

    return {board};
})();

const displayController = (() => {
    
    const _getElement = document.querySelectorAll('.square'); // <-- Nodelist
    const _displayWinAnnounce = document.querySelector('.round');
    let _playerTurn;
    let _gameOver = false;
    let _moves = 0;

    _getElement.forEach(element => {
        element.addEventListener('click', (e) => {

            if (e.target.innerText === '' && _gameOver === false) {
                // X's or O's
                const switchSymbol = () => {     
                    (_playerTurn === undefined || _playerTurn === 'X') ? _playerTurn = 'O' : _playerTurn = 'X';
                    return _playerTurn;
                };

                // Adds X's or O's to gameBoard.board array
                gameBoard.board.splice(`${e.target.getAttribute('data-array')}`, 1, switchSymbol())
                
                // Displays X's or O's on the HTML and adds color classes
                gameBoard.board.forEach((value, index) => {
                    _getElement[`${index}`].innerText = `${value}`;
                
                    if (_getElement[`${index}`].innerText === 'X') {
                        _getElement[`${index}`].classList.add('red');
                    } else {
                        _getElement[`${index}`].classList.add('blue');
                    }
                })
                
                // Winning logic and announces winner.
                const _winner = (() => {
                    let whoWon = 'nobody';
                    _moves++;

                    if (gameBoard.board[0] === 'X' && gameBoard.board[3] === 'X' && gameBoard.board[6] === 'X' ||
                        gameBoard.board[1] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[7] === 'X' ||
                        gameBoard.board[2] === 'X' && gameBoard.board[5] === 'X' && gameBoard.board[8] === 'X' ||
                        gameBoard.board[0] === 'X' && gameBoard.board[1] === 'X' && gameBoard.board[2] === 'X' ||
                        gameBoard.board[3] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[5] === 'X' ||
                        gameBoard.board[6] === 'X' && gameBoard.board[7] === 'X' && gameBoard.board[8] === 'X' ||
                        gameBoard.board[0] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[8] === 'X' ||
                        gameBoard.board[2] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[6] === 'X') {
                        whoWon = 'loser!!';
                        _gameOver = true;
                        _displayWinAnnounce.innerText = whoWon;
                    } else if (gameBoard.board[0] === 'O' && gameBoard.board[3] === 'O' && gameBoard.board[6] === 'O' ||
                        gameBoard.board[1] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[7] === 'O' ||
                        gameBoard.board[2] === 'O' && gameBoard.board[5] === 'O' && gameBoard.board[8] === 'O' ||
                        gameBoard.board[0] === 'O' && gameBoard.board[1] === 'O' && gameBoard.board[2] === 'O' ||
                        gameBoard.board[3] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[5] === 'O' ||
                        gameBoard.board[6] === 'O' && gameBoard.board[7] === 'O' && gameBoard.board[8] === 'O' ||
                        gameBoard.board[0] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[8] === 'O' ||
                        gameBoard.board[2] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[6] === 'O') {
                        whoWon = 'winner!!';
                        _gameOver = true;
                        _displayWinAnnounce.innerText = whoWon;
                    } else if (_moves === 9 && whoWon === 'nobody') {
                        whoWon = 'tie!!';
                        _gameOver = true;
                        _displayWinAnnounce.innerText = whoWon;
                    }
                    
                // console.log(gameBoard.board);
                })();
                
            };    
        });
    })
    // Delete this return if you don't need to actually return anything
    return {};
})();
