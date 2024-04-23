import { useState } from "react";

const initialBoard = () => new Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isNextX, setisNextX] = useState(true);

  /*
   function findWinningPatterns(n) {
    const WINNING_PATTERNS =[];

    // for rows & colums
    for(let i=0;i<n;i++){
      WINNING_PATTERNS.push([[i,0],[i,1],[i,2],[i,3]])
      WINNING_PATTERNS.push([[0,i],[1,i],[2,i],[3,i]])
    }

    // for diagonal
    let d1 = [];
    let d2 = [];
    for(let i=0;i<n;i++){
      d1.push([i,i])
      d2.push([i, n - 1 -i])
    }
    return WINNING_PATTERNS.push(d1,d2);

   }


   ex:2


   function findWinningPatterns(board) {
    const size = board.length;
    let winningPatterns = [];

    // Check rows and columns
    for (let i = 0; i < size; i++) {
        let rowPattern = [];
        let colPattern = [];
        for (let j = 0; j < size; j++) {
            rowPattern.push(i * size + j);
            colPattern.push(j * size + i);
        }
        winningPatterns.push(rowPattern, colPattern);
    }

    // Check diagonals
    let diagonal1 = [];
    let diagonal2 = [];
    for (let i = 0; i < size; i++) {
        diagonal1.push(i * size + i);
        diagonal2.push(i * size + size - 1 - i);
    }
    winningPatterns.push(diagonal1, diagonal2);

    return winningPatterns;
}

// Example usage
let board = [
    ['X', 'O', 'X', 'O'],
    ['X', 'X', 'O', 'O'],
    ['X', 'O', 'O', 'X'],
    ['O', 'X', 'X', 'O']
];
   */
  const WINNING_PATTERS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERS.length; i++) {
      const [a, b, c] = WINNING_PATTERS[i];

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${isNextX ? "O" : "X"} win`;
    if (board.every((b) => b !== null)) return `It's a draw`;
    return `${isNextX ? "X" : "O"} turn`;
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isNextX ? "X" : "O";
    setBoard(newBoard);
    setisNextX(!isNextX);
  };

  const reset = () => {
    setBoard(initialBoard());
    setisNextX(true);
  };

  return { board, getStatusMessage, handleClick, reset, calculateWinner };
};

export default useTicTacToe;
