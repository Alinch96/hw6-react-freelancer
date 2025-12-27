import clsx from "clsx";
import styles from "./ButtonsSort.module.css";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

const ButtonsSort = ({ sortProperties, setSortProperties, parameter }) => {
  const handleSortClick = (e) => {
    const { name, value } = e.currentTarget;
    setSortProperties({ parameter: name, order: value });
  };

  const isActive = (order) =>
    sortProperties.parameter === parameter && sortProperties.order === order;

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={clsx(styles.sortButton, isActive("asc") && styles.active)}
        name={parameter}
        value="asc"
        onClick={handleSortClick}
        aria-label={`Sort ${parameter} ascending`}
      >
        <GoArrowUp />
      </button>
      <button
        type="button"
        className={clsx(styles.sortButton, isActive("desc") && styles.active)}
        name={parameter}
        value="desc"
        onClick={handleSortClick}
        aria-label={`Sort ${parameter} descending`}
      >
        <GoArrowDown />
      </button>
    </div>
  );
};

export default ButtonsSort;
