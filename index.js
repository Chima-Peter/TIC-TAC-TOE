const ticTacToe = (function () {
    
    const gameBoard = () => {
        const grid = [];
        for (let i = 0; i < 9; i++) {
            grid[i] = i;
        }
        return { grid }
    };
    const createPlayer = (type) => {
        const playerChoice = type.toUpperCase();
        return { type };
    };

    const startGame = () => {
        divs.forEach((div) => {
            div.addEventListener('click', () => {
                div.textContent === '' ? count = count + 1 : count;
                count <= 9 ? playGame(div, count) : count;
            });
        });
    }
    const playGame = (div, count) => {
        if (count === 9)
            gameOver();
            key = Number(div.getAttribute('data-value'));
            if (count % 2 === 0) {
                if (div.textContent === '')
                {
                    grid[key] = player2.type
                    div.textContent = player2.type;
                    count === 9 ? gameOver() : determineWinner();
                }
            } else {
                if (div.textContent === '')
                {
                    grid[key] = player1.type
                    div.textContent = player1.type;
                    count === 9 ? gameOver() : determineWinner();
                }
            }

    };
    const determineWinner = () => {
        console.log(grid)
        const winningPairs = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ];
    
        for (let i = 0; i < winningPairs.length; i++) {
            let [a , b, c] = winningPairs[i];
            if (grid[a] === 'x' && grid[a] === grid[b] && grid[a] === grid[c])
            {
                let result = document.querySelector('#xPara');
                result.textContent = Number(result.textContent) + 1;
                gameOver();
            } else if (grid[a] === 'o' && grid[a] === grid[b] && grid[a] === grid[c])
            {
                let result = document.querySelector('#oPara');
                result.textContent = Number(result.textContent) + 1;
                gameOver();
            }
        }
    };

    const gameOver = () => {
        restart.classList.add('visible');
        count = 10;
        restart.addEventListener('click', () => clearBoard())
    }

    const clearBoard = () => {
        grid = gameBoard();
        console.log(grid);
        divs.forEach((div) => {
            div.textContent = '';
        });
        count = 0;
        restart.classList.remove('visible');
        startGame();
    }
    const restart = document.querySelector('#restart');
    const divs =  document.querySelectorAll('#div');
    const player1 = createPlayer('x');
    const player2 = createPlayer('o');
    let grid = gameBoard();
    let count = 0;
    return { startGame };
})();

ticTacToe.startGame();








