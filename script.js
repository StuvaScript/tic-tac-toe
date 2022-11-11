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
            })
        });
    })
    // Delete this return if you dont need to actually return anything
    return {};
})();