import { memo } from "react";
import styles from "./ResultDisplay.module.css";

const ResultDisplay = memo(({ result }) => {
  console.log("Result-Display");
  return (
    <div className={styles.result}>
      <span className={styles.label}>Result:</span>
      <span className={styles.value}>{result}</span>
    </div>
  );
});

export default ResultDisplay;
