import styles from "./TicTacToe.module.css";
import useTicTacToe from "../hooks/use-tic-tac-toe";

export function TicTacToe() {
  const { board, getStatusMessage, handleClick, reset, calculateWinner } =
    useTicTacToe();
  return (
    <div className={styles.game}>
      <div className={styles.status}>
        Player X turn
        <button className={styles.reset}>Reset</button>
      </div>
      <div className={styles.board}>
        {board.map((b, idx) => (
          <button key={idx} className={styles.cell}>
            X
          </button>
        ))}
      </div>
    </div>
  );
}
