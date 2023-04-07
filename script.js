const gameBoard = (() => {
  const board = [, , , , , , , , ,];

  return { board };
})();

const playerController = (() => {
  let playersArray = [];

  const _newPlayers = {
    init: function () {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom: function () {
      this._grabNameClass = document.querySelectorAll(".name");
      this._form = document.querySelectorAll("form");
      this._nameButton = document.querySelectorAll(".name-input");
      this._playerName = document.querySelectorAll("input");
      this._lastChild = document.querySelectorAll(".name > div:last-child");
      this._instructions = document.querySelector(".name-instructions");
    },
    bindEvents: function () {
      this._nameButton.forEach((button, index) => {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          if (this._playerName[index].value !== "") {
            this.addPerson(this._playerName[index].value, index);
            this.render(index);
          }
        });
      });
    },
    render: function (index) {
      this._instructions.remove();
      this._form[index].remove();
      this._newDiv = document.createElement("div");
      this._newDiv.classList.add("newName");
      this._grabNameClass[index].insertBefore(
        this._newDiv,
        this._grabNameClass[index].children[0]
      );
      this._lastChild[index].classList.add("named");
      if (playersArray.length === 1) {
        this._newDiv.innerText = playersArray[0];
      } else {
        this._newDiv.innerText = playersArray[index];
      }
    },
    addPerson: function (name, index) {
      if (index === 0) {
        playersArray.unshift(this._playerName[0].value);
      } else {
        playersArray.push(this._playerName[1].value);
      }
    },
  };

  _newPlayers.init();

  return { playersArray };
})();

const displayController = (() => {
  const _getElement = document.querySelectorAll(".square"); // <-- Nodelist
  const _displayWinAnnounce = document.querySelector(".round-winner-display");
  let _playerTurn;
  let _gameOver = false;
  let _moves = 0;

  _getElement.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (playerController.playersArray.length !== 2) {
        return;
      }

      if (e.target.innerText === "" && _gameOver === false) {
        // X's or O's
        const switchSymbol = () => {
          _playerTurn === undefined || _playerTurn === "X"
            ? (_playerTurn = "O")
            : (_playerTurn = "X");
          return _playerTurn;
        };

        // Adds X's or O's to gameBoard.board array
        gameBoard.board.splice(
          `${e.target.getAttribute("data-array")}`,
          1,
          switchSymbol()
        );

        // Displays X's or O's on the HTML and adds color classes
        gameBoard.board.forEach((value, index) => {
          _getElement[`${index}`].innerText = `${value}`;

          if (_getElement[`${index}`].innerText === "X") {
            _getElement[`${index}`].classList.add("red");
          } else {
            _getElement[`${index}`].classList.add("blue");
          }
        });

        // Winning logic and announces winner.
        const _winner = (() => {
          let whoWon = "nobody";
          _moves++;

          if (
            (gameBoard.board[0] === "X" &&
              gameBoard.board[3] === "X" &&
              gameBoard.board[6] === "X") ||
            (gameBoard.board[1] === "X" &&
              gameBoard.board[4] === "X" &&
              gameBoard.board[7] === "X") ||
            (gameBoard.board[2] === "X" &&
              gameBoard.board[5] === "X" &&
              gameBoard.board[8] === "X") ||
            (gameBoard.board[0] === "X" &&
              gameBoard.board[1] === "X" &&
              gameBoard.board[2] === "X") ||
            (gameBoard.board[3] === "X" &&
              gameBoard.board[4] === "X" &&
              gameBoard.board[5] === "X") ||
            (gameBoard.board[6] === "X" &&
              gameBoard.board[7] === "X" &&
              gameBoard.board[8] === "X") ||
            (gameBoard.board[0] === "X" &&
              gameBoard.board[4] === "X" &&
              gameBoard.board[8] === "X") ||
            (gameBoard.board[2] === "X" &&
              gameBoard.board[4] === "X" &&
              gameBoard.board[6] === "X")
          ) {
            whoWon = `${playerController.playersArray[1]} wins!!`;
            _gameOver = true;
            _displayWinAnnounce.innerText = whoWon;
          } else if (
            (gameBoard.board[0] === "O" &&
              gameBoard.board[3] === "O" &&
              gameBoard.board[6] === "O") ||
            (gameBoard.board[1] === "O" &&
              gameBoard.board[4] === "O" &&
              gameBoard.board[7] === "O") ||
            (gameBoard.board[2] === "O" &&
              gameBoard.board[5] === "O" &&
              gameBoard.board[8] === "O") ||
            (gameBoard.board[0] === "O" &&
              gameBoard.board[1] === "O" &&
              gameBoard.board[2] === "O") ||
            (gameBoard.board[3] === "O" &&
              gameBoard.board[4] === "O" &&
              gameBoard.board[5] === "O") ||
            (gameBoard.board[6] === "O" &&
              gameBoard.board[7] === "O" &&
              gameBoard.board[8] === "O") ||
            (gameBoard.board[0] === "O" &&
              gameBoard.board[4] === "O" &&
              gameBoard.board[8] === "O") ||
            (gameBoard.board[2] === "O" &&
              gameBoard.board[4] === "O" &&
              gameBoard.board[6] === "O")
          ) {
            whoWon = `${playerController.playersArray[0]} wins!!`;
            _gameOver = true;
            _displayWinAnnounce.innerText = whoWon;
          } else if (_moves === 9 && whoWon === "nobody") {
            whoWon = "tie!!";
            _gameOver = true;
            _displayWinAnnounce.innerText = whoWon;
          }
        })();
      }
    });
  });
})();

(function () {
  const reset = document.querySelector("#reset");
  reset.addEventListener("click", (e) => {
    window.location.href = window.location.href;
  });
})();
