import React, { memo } from "react";
import ListItem from "./ListItem";

import styles from "./List.module.css";

const List = ({ list }) => {
  if (!list?.length) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyTitle}>No results</p>
        <p className={styles.emptyText}>Try a different search query.</p>
      </div>
    );
  }

  return (
    <ul className={styles.list} role="list">
      {list.map((item, index) => (
        <ListItem key={item.id} item={item} index={index} />
      ))}
    </ul>
  );
};

export default memo(List);
