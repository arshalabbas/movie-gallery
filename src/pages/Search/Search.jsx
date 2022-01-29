import React, { useEffect, useState } from "react";
import queryString from "query-string";

import config from "../../config.json";

function Search() {
  const [query, setQuery] = useState("");
  document.title = `Loading... ${config.name}`;
  useEffect(() => {
    const { query } = queryString.parse(window.location.search);

    setQuery(query);
  }, []);

  document.title = `Search - "${query}"`;

  return <div className="page"></div>;
}

export default Search;
