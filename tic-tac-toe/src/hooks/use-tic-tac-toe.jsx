import { useState } from "react";

const initialBoard = () => new Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isNextX, setisNextX] = useState(true);

  const WINNING_PATTERS = [];

  const calculateWinner = () => {};

  const getStatusMessage = () => {};

  const handleClick = () => {};

  const reset = () => {};

  return { board, getStatusMessage, handleClick, reset, calculateWinner };
};

export default useTicTacToe;
