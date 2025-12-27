import clsx from "clsx";
import { memo } from "react";
import styles from "./GridRow.module.css";

const GridRow = memo(({ company }) => {
  return (
    <tr className={styles.row}>
      <td className={styles.cell}>{company.name}</td>
      <td className={styles.cell}>{company.brewery_type}</td>
      <td className={styles.cell}>{company.city}</td>
      <td className={styles.cell}>{company.state}</td>
      <td className={clsx(styles.cell, styles.mono)}>{company.postal_code}</td>
    </tr>
  );
});

export default GridRow;
