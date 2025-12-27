import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.error} role="alert">
      Error loading data. Please try again.
    </div>
  );
};

export default Error;
