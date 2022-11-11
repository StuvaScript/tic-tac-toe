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

// Need to deny access to picking squares that are already taken. Probably just
// detect if innerText is empty or not.

const gameBoard = (() => {
    const board = [ , , , , , , , , ];

    return {board};
})();

const displayController = (() => {
    // Nodelist
    const _getElement = document.querySelectorAll('.square');
    let _playerTurn;

    _getElement.forEach(element => {
        element.addEventListener('click', (e) => {

            if (e.target.innerText === '') {
                // X's or O's
                const switchSymbol = () => {     
                    (_playerTurn === undefined || _playerTurn === 'X') ? _playerTurn = 'O' : _playerTurn = 'X';
                    return _playerTurn;
                };

                // Adds X's or O's to gameBoard.board aray
                gameBoard.board.splice(`${e.target.getAttribute('data-array')}`, 1, switchSymbol())
                
                // Cycles thru the array and displays X's or O's on the HTML
                gameBoard.board.forEach((value, index) => {
                    const _getIndex = _getElement[`${index}`];
                    _getIndex.innerText = `${value}`;
                    console.log(index + ' index');
                    console.log(value + ' value');
                })

                // Working on the logic to a tie game....
                
                // Winning logic and announces winner.
                const _winner = (() => {
                    let whoWon;
                    if (gameBoard.board[0] === 'X' && gameBoard.board[3] === 'X' && gameBoard.board[6] === 'X' ||
                        gameBoard.board[1] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[7] === 'X' ||
                        gameBoard.board[2] === 'X' && gameBoard.board[5] === 'X' && gameBoard.board[8] === 'X' ||
                        gameBoard.board[0] === 'X' && gameBoard.board[1] === 'X' && gameBoard.board[2] === 'X' ||
                        gameBoard.board[3] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[5] === 'X' ||
                        gameBoard.board[6] === 'X' && gameBoard.board[7] === 'X' && gameBoard.board[8] === 'X' ||
                        gameBoard.board[0] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[8] === 'X' ||
                        gameBoard.board[2] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[6] === 'X') {
                        whoWon = 'loser';
                        console.log('Loser!!');
                    } else if (gameBoard.board[0] === 'O' && gameBoard.board[3] === 'O' && gameBoard.board[6] === 'O' ||
                        gameBoard.board[1] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[7] === 'O' ||
                        gameBoard.board[2] === 'O' && gameBoard.board[5] === 'O' && gameBoard.board[8] === 'O' ||
                        gameBoard.board[0] === 'O' && gameBoard.board[1] === 'O' && gameBoard.board[2] === 'O' ||
                        gameBoard.board[3] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[5] === 'O' ||
                        gameBoard.board[6] === 'O' && gameBoard.board[7] === 'O' && gameBoard.board[8] === 'O' ||
                        gameBoard.board[0] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[8] === 'O' ||
                        gameBoard.board[2] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[6] === 'O') {
                        whoWon = 'winner';
                        console.log('Winner!!');
                    } 
                    
                console.log(gameBoard.board);
                })();
                
            };    
        });
    })
    // Delete this return if you don't need to actually return anything
    return {};
})();
