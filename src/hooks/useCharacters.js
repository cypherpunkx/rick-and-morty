import React, { useEffect, useState, useMemo, useCallback } from "react";
import { rickandmortyapi } from "../lib/rickandmortyApi";

function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const gotoNextPage = useCallback(() => {
    setPage((page) => page + 1);
    return;
  }, [page]);

  const gotoPrevPage = useCallback(() => {
    setPage((page) => page - 1);
    return;
  }, [page]);

  useEffect(() => {
    setLoading(true);
    rickandmortyapi
      .getCharacters({
        page,
      })
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [page]);

  return {
    characters,
    isLoading,
    error,
    page,
    info,
    gotoNextPage,
    gotoPrevPage,
  };
}

export default useCharacters;
