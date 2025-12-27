import clsx from "clsx";
import { useDeferredValue, useMemo, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import ButtonsSort from "./ButtonsSort";
import Error from "./Error";
import GridRow from "./GridRow";
import Loader from "./Loader";

import styles from "./DataGrid.module.css";

const safeStr = (v) => (v ?? "").toString();

const DataGrid = () => {
  const { isLoading, error, companies } = useFetch({
    pageNum: 1,
    per_page: 200,
  });

  const [searchFilter, setSearchFilter] = useState("");
  const [sortProperties, setSortProperties] = useState({
    parameter: "",
    order: "",
  });

  const filteredCompanies = useMemo(() => {
    const q = searchFilter.trim().toLowerCase();
    if (!q) return companies;
    return companies.filter((company) =>
      safeStr(company?.name).toLowerCase().includes(q)
    );
  }, [companies, searchFilter]);

  const sortedCompanies = useMemo(() => {
    const { parameter, order } = sortProperties;
    if (!parameter || !order) return filteredCompanies;

    return filteredCompanies.toSorted((a, b) => {
      const valueA = safeStr(a?.[parameter]);
      const valueB = safeStr(b?.[parameter]);

      const cmp = valueA.localeCompare(valueB, undefined, { sensitivity: "base" });
      return order === "asc" ? cmp : -cmp;
    });
  }, [filteredCompanies, sortProperties]);

  const deferredCompanies = useDeferredValue(sortedCompanies);

  return (
    <section className={clsx("card", styles.card)}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>Data grid</h2>
        </div>

        <label className={styles.searchWrap}>
          <span className="visuallyHidden">Search by name</span>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search by name…"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
          />
        </label>
      </header>

      {isLoading && <Loader />}
      {error && <Error />}

      <div className={styles.tableScroll} role="region" aria-label="Companies table">
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>
                <div className={styles.thInner}>
                  <span>Name</span>
                  <ButtonsSort
                    {...{ sortProperties, setSortProperties, parameter: "name" }}
                  />
                </div>
              </th>
              <th className={styles.th}>
                <div className={styles.thInner}>
                  <span>Type</span>
                  <ButtonsSort
                    {...{
                      sortProperties,
                      setSortProperties,
                      parameter: "brewery_type",
                    }}
                  />
                </div>
              </th>
              <th className={styles.th}>
                <div className={styles.thInner}>
                  <span>City</span>
                  <ButtonsSort
                    {...{ sortProperties, setSortProperties, parameter: "city" }}
                  />
                </div>
              </th>
              <th className={styles.th}>
                <div className={styles.thInner}>
                  <span>State</span>
                  <ButtonsSort
                    {...{ sortProperties, setSortProperties, parameter: "state" }}
                  />
                </div>
              </th>
              <th className={styles.th}>Postal Code</th>
            </tr>
          </thead>

          <tbody className={styles.tbody}>
            {deferredCompanies.map((company) => (
              <GridRow key={company.id} company={company} />
            ))}
          </tbody>
        </table>
      </div>

      <footer className={styles.footer}>
        <span className={styles.count}>
          Rows: <b>{deferredCompanies.length}</b>
        </span>
      </footer>
    </section>
  );
};

export default DataGrid;
