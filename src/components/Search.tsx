import Fuse from "fuse.js";
import { useEffect, useRef, useState, useMemo } from "react";
import Card from "@components/Card";
import type { CollectionEntry } from "astro:content";

export type SearchItem = {
  title: string;
  description: string;
  data: CollectionEntry<"blog">["data"];
  slug: string;
};

interface Props {
  searchList: SearchItem[];
}

interface SearchResult {
  item: SearchItem;
  refIndex: number;
}

export default function SearchBar({ searchList }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
    null
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value);
  };

  const fuse = useMemo(
    () =>
      new Fuse(searchList, {
        keys: ["title", "description", "data.tags", "slug"],
        includeMatches: true,
        minMatchCharLength: 2,
        threshold: 0.5,
      }),
    [searchList]
  );

  useEffect(() => {
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get("q");
    if (searchStr) setInputVal(searchStr);

    setTimeout(function () {
      inputRef.current!.selectionStart = inputRef.current!.selectionEnd =
        searchStr?.length || 0;
    }, 50);
  }, []);

  useEffect(() => {
    let inputResult = inputVal.length > 1 ? fuse.search(inputVal) : [];
    setSearchResults(inputResult);

    if (inputVal.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", inputVal);
      const newRelativePathQuery =
        window.location.pathname + "?" + searchParams.toString();
      history.replaceState(history.state, "", newRelativePathQuery);
    } else {
      history.replaceState(history.state, "", window.location.pathname);
    }
  }, [inputVal]);

  return (
    <>
      <label
        htmlFor="search"
        className="focus relative m-4 block rounded-full p-1"
      >
        <span className="absolute inset-y-0 left-2 flex items-center pl-2 opacity-75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            stroke="currentColor"
          >
            <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
          </svg>
        </span>
        <input
          className="input input-bordered input-accent block w-full rounded-full   
          py-3 pl-12 pr-3 placeholder:italic placeholder:text-opacity-75 
         "
          placeholder="Procure por qualquer coisa..."
          type="text"
          name="pesquisa"
          defaultValue={inputVal}
          onChange={handleChange}
          autoComplete="off"
          ref={inputRef}
        />
        <span className="sr-only">Pesquisar</span>
      </label>

      {inputVal.length > 1 && (
        <div className="mb-8 mt-8">
          Encontrado {searchResults?.length}
          {searchResults?.length && searchResults?.length === 1
            ? " result"
            : " results"}{" "}
          para '{inputVal}'
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
        {searchResults &&
          searchResults.map(({ item, refIndex }) => (
            <Card
              href={`/blog/${item.slug}/`}
              frontmatter={item.data}
              key={`${refIndex}-${item.slug}`}
            />
          ))}
      </div>
    </>
  );
}
