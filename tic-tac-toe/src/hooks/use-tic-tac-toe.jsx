import { useState } from "react";

const initialBoard = () => new Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isNextX, setisNextX] = useState(true);

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
