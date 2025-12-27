import { useMemo, useState } from "react";
import clsx from "clsx";

import List from "./List";
import { useDebounce } from "../../hooks/useDebounce";
import { useLoadData } from "../../hooks/useLoadData";

import styles from "./DebouncedSearch.module.css";

const DebouncedSearch = () => {
  const [search, setSearch] = useState("");
  const { items } = useLoadData(500);

  const debouncedSearch = useDebounce(search, 500);

  const filteredList = useMemo(() => {
    const q = debouncedSearch.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => item.name.toLowerCase().includes(q));
  }, [items, debouncedSearch]);

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h2 className={styles.title}>Debounced Search</h2>
      </header>

      <div className={styles.searchRow}>
        <label className={styles.label} htmlFor="debounced-search">
          Search
        </label>
        <input
          id="debounced-search"
          className={clsx(styles.input, search && styles.inputActive)}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type to search…"
          autoComplete="off"
        />
      </div>

      <div className={styles.listCard} aria-live="polite">
        <div className={styles.listHeader}>
          <span className={styles.count}>
            {filteredList.length} result{filteredList.length === 1 ? "" : "s"}
          </span>
          {debouncedSearch !== search && (
            <span className={styles.hint}>Updating…</span>
          )}
        </div>

        <List list={filteredList} />
      </div>
    </section>
  );
};

export default DebouncedSearch;
