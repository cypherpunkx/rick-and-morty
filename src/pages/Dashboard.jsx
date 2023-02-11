import React from "react";
import useCharacters from "../hooks/useCharacters";
import { Characters, Loader } from "../components";

export default function Dashboard() {
  const {
    characters,
    isLoading,
    error,
    page,
    info,
    gotoNextPage,
    gotoPrevPage,
  } = useCharacters();

  console.log(characters);
  console.log(info);

  if (isLoading) return <Loader />;

  return (
    <article>
      <Characters characters={characters} />
      <div className="mt-6 space-x-2 text-center md:text-left">
        {page > 1 && (
          <button
            onClick={gotoPrevPage}
            className="bg-lime-500 text-black text-xl font-semibold py-2 px-6 rounded shadow-md shadow-lime-500/100"
          >
            Prev
          </button>
        )}
        {page < info.pages && (
          <button
            onClick={gotoNextPage}
            className="bg-lime-500 text-black text-xl font-semibold py-2 px-6 rounded shadow-md shadow-lime-500/100"
          >
            Next
          </button>
        )}
        <span>Pages: {page}</span>
      </div>
    </article>
  );
}
