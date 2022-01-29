import React, { useEffect, useState } from "react";
import queryString from "query-string";

import config from "../../config.json";
import { Container } from "react-bootstrap";
import MoviesRow from "../../Components/MoviesRow";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  document.title = `Loading... ${config.name}`;
  useEffect(() => {
    const { query } = queryString.parse(window.location.search);

    setSearchQuery(query);

    const moviesList = [
      {
        id: "122631",
        title: "Spider-Man No Way Home",
        year: 2021,
        category: "Action/Adventure",
        lang: "English",
        img: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
      },
      {
        id: "0010",
        title: "Minnal Murali",
        year: 2021,
        category: "Action/Adventure",
        lang: "Malayalam",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Minnal_Murali.jpg/220px-Minnal_Murali.jpg",
      },
    ];

    setSearchResults(moviesList);
  }, []);

  document.title = `Search - "${searchQuery}"`;

  return (
    <div className="page">
      <Container>
        <MoviesRow
          movieList={searchResults}
          title={`Search Result for "${searchQuery ? searchQuery : " "}"`}
          loaded
          over
        />
      </Container>
    </div>
  );
}

export default Search;
