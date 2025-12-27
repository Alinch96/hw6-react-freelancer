import { useEffect, useState } from "react";
import { fetchCompanies } from "../helpers/fetchCompanies";

export const useFetch = ({ pageNum, per_page }) => {
  const [page, setPage] = useState(pageNum);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    (async () => {
      if(page>5) return;
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchCompanies(page, per_page);
        setCompanies((companies) => [...data,...companies] 
        );
        setPage((page) => page + 1);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, per_page]);

    return { isLoading, error, companies};
};
