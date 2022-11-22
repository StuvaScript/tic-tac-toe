// At the end of each session, if all code is working as planned, merge your
// branch with the main. Actively consider not merging if you think the code
// is too iffy

// Limit the number of letters someone can input for their name so it doesn't
// break the grid layout, make it 8 letters with all letters lowercase accept
// the first letter is capitalized.

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


// let player1;
// let player2;

    
// const buttonAction = document.querySelectorAll('button') // <-- Nodelist
//     .forEach((button) => {
//         button.addEventListener('click', (e) => {
//             e.preventDefault();

//             // Taking the player name input data and creating an object with it
//             const _getPlayerName = document.querySelectorAll('input'); // <-- Nodelist
//             player1 = players(_getPlayerName[0].value);
//             player2 = players(_getPlayerName[1].value);

//             const _grabForm = document.querySelectorAll('form'); // <-- Nodelist
//             const _grabNameClass = document.querySelectorAll('.name'); // <-- Nodelist
//             const _newDiv = document.createElement('div');
//             if (player1.playerName !== '') {
//                 _grabForm[0].remove();
//                 _newDiv.classList.add('newName');
//                 _newDiv.innerText = player1.playerName;
//                 _grabNameClass[0].insertBefore(_newDiv, _grabNameClass[0].children[0]);
//             }

//             if (player2.playerName !== '') {
//                 _grabForm[1].remove();
//                 _newDiv.classList.add('newName');
//                 _newDiv.innerText = player2.playerName;
//                 _grabNameClass[1].insertBefore(_newDiv, _grabNameClass[1].children[0]);
//             }
//         })
//     })

//     // Player name factory function
// const players = (name) => {
//     const playerName = name;   
//     return {playerName};
// };

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------

// let player1;
// let player2;

    
// const buttonAction = document.querySelectorAll('button') // <-- Nodelist
//     .forEach((button) => {
//         button.addEventListener('click', (e) => {
//             e.preventDefault();

//             // Taking the player name input data and creating an object with it
//             const _getPlayerName = document.querySelectorAll('input'); // <-- Nodelist
//             player1 = players(_getPlayerName[0].value);
//             player2 = players(_getPlayerName[1].value);

//             const _grabForm = document.querySelectorAll('form'); // <-- Nodelist
//             const _grabNameClass = document.querySelectorAll('.name'); // <-- Nodelist
//             const _newDiv = document.createElement('div');
//             if (player1.playerName !== '') {
//                 _grabForm[0].remove();
//                 _newDiv.classList.add('newName');
//                 _newDiv.innerText = player1.playerName;
//                 _grabNameClass[0].insertBefore(_newDiv, _grabNameClass[0].children[0]);
//             }

//             if (player2.playerName !== '') {
//                 _grabForm[1].remove();
//                 _newDiv.classList.add('newName');
//                 _newDiv.innerText = player2.playerName;
//                 _grabNameClass[1].insertBefore(_newDiv, _grabNameClass[1].children[0]);
//             }
//         })
//     })

//     // Player name factory function
// const players = (name) => {
//     const playerName = name;   
//     return {playerName};
// };

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------

// Currently copying the video's method on the code below using the info
// above. Even farther above that, I have my original code commented out. If
// shit hits the fan, just uncomment the far above code and delete everything
// below it :)

(function() {

    const _newPlayers = {
        playersArray: [],
        init: function() {
            this.cacheDom();
            this.bindEvents();
            // this.render();
        },
        cacheDom: function() {
            this._grabNameClass = document.querySelectorAll('.name'); // <-- Nodelist
            this._form = document.querySelectorAll('form'); // <-- Nodelist
            this._button = document.querySelectorAll('button'); // <-- Nodelist
            this._playerName = document.querySelectorAll('input');
            
            this._newDiv = document.createElement('div');
            this._newDiv.classList.add('newName');
        },

        bindEvents: function() {
            this._button.forEach((button, index) => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.addPerson(this._playerName[index].value, index);
                    this.render(index);
                })
            })
        },
        render: function(index) {
            this._form[index].remove();
            this._grabNameClass[index].insertBefore(this._newDiv, this._grabNameClass[index].children[0]);
            this._newDiv.innerText = this.playersArray[index];
        },
        // Player name factory function
        addPerson: function(name, index) {
            if (index === 0) {
            this.playersArray.unshift(this._playerName[0].value);
            } else {
            this.playersArray.push(this._playerName[1].value);
            }

            console.log(this.playersArray)
        },
    }

    _newPlayers.init();

})();