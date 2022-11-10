// At the end of each session, if all code is working as planned, merge your
// branch with the main. Actively consider not merging if you think the code
// is too iffy

// Limit the number of letters someone can input for their name so it doesn't
// break the grid layout, make it 8 letters with all letters lowercase accept
// the first letter is capitalized.

//Color the X's and O's red and blue respectively

const gameBoard = (() => {
    const board = ['O', 'X', 'X', , 'O', 'O', , 'X', 'O'];

    return {board};
})();

const displayController = (() => {
    // Nodelist
    const _getElement = document.querySelectorAll('.square');

    _getElement.forEach(element => {
        element.addEventListener('click', () => {
            console.log(element);
        });
    })

    const _boardDisplay = gameBoard.board.forEach((value, index) => {
        const _getIndex = _getElement[`${index}`];
        // console.log(_getIndex);
        _getIndex.innerText = `${value}`;
    })

    console.log(_getElement);

    return {};
})();