import { useMemo } from "react";
import clsx from "clsx";
import { useDualInput } from "../../hooks/useDualInput";
import { useSubmit } from "../../hooks/useSubmit";
import NumericInput from "./NumericInput";
import ResultDisplay from "./ResultDisplay";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const { values, bindA, bindB } = useDualInput({ a: "", b: "" });
  const { handleSubmit, numbers } = useSubmit({ values });

  const result = useMemo(() => numbers.a + numbers.b, [numbers.a, numbers.b]);

  const isBtnDisabled =
    values.a.length === 0 ||
    values.b.length === 0 ||
    (numbers.a === values.a && numbers.b === values.b);

  const isResultShown = numbers.a !== "" && numbers.b !== "";

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Calculator</h2>
        <p className={styles.subtitle}>Enter two numbers and get the sum.</p>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <NumericInput bind={bindA} />
          <NumericInput bind={bindB} />
        </div>

        <div className={styles.actions}>
          <button
            type="submit"
            className={clsx(styles.button, isBtnDisabled && styles.buttonDisabled)}
            disabled={isBtnDisabled}
          >
            Calculate
          </button>
        </div>

        <div
          className={clsx(styles.resultWrap, isResultShown ? styles.resultShown : styles.resultHidden)}
          aria-live="polite"
        >
          {isResultShown && <ResultDisplay result={result} />}
        </div>
      </form>
    </section>
  );
};

export default Calculator;
