import styles from "./TicTacToe.module.css";
import useTicTacToe from "../hooks/use-tic-tac-toe";

export function TicTacToe() {
  const { board, getStatusMessage, handleClick, reset, calculateWinner } =
    useTicTacToe();

  return (
    <div className={styles.game}>
      <div className={styles.status}>
        {getStatusMessage()}
        <button className={styles.reset} onClick={reset}>
          Reset
        </button>
      </div>
      <div className={styles.board}>
        {board.map((b, idx) => (
          <button
            key={idx}
            className={styles.cell}
            onClick={() => handleClick(idx)}
            disabled={b !== null}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}
