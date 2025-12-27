import React, { memo } from "react";
import clsx from "clsx";

import styles from "./ListItem.module.css";

const ListItem = ({ item, index }) => {
  return (
    <li
      className={clsx(
        styles.item,
        index % 2 === 0 ? styles.itemEven : styles.itemOdd
      )}
    >
      <span className={styles.name}>{item.name}</span>
    </li>
  );
};

export default memo(ListItem);
