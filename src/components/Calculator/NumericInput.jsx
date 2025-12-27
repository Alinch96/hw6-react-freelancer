import clsx from "clsx";
import styles from "./NumericInput.module.css";

const NumericInput = ({ bind }) => {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={bind.id}>
        {bind.name}:
      </label>
      <input
        className={clsx(styles.input, bind.value?.length === 0 && styles.inputEmpty)}
        type="number"
        inputMode="decimal"
        {...bind}
      />
    </div>
  );
};

export default NumericInput;
