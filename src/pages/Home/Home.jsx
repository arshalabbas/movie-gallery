import React, { useEffect, useState } from "react";

import MoviesRow from "./Sections/MoviesRow";
import ChipsRow from "./Sections/ChipsRow";

export default function Home() {
  const [newReleased, setNewReleased] = useState([1, 1, 1, 1]);
  const [categoryChips, setCategoryChips] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
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
      {
        id: "0100",
        title: "Churuli",
        year: 2021,
        category: "Mystery/Sci-Fi",
        lang: "Malayalam",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Churuli.jpeg/220px-Churuli.jpeg",
      },
      {
        id: "1000",
        title: "Pushpa: The Rise",
        year: 2021,
        category: "Action/Drama",
        lang: "Telugu",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Pushpa_-_The_Rise_%282021_film%29.jpg/220px-Pushpa_-_The_Rise_%282021_film%29.jpg",
      },
    ];

    const chipsList = [
      { id: "0000", name: "Sci-Fi" },
      { id: "0001", name: "Adventure" },
      { id: "0010", name: "Fantasy" },
      { id: "0100", name: "Drama" },
    ];

    setTimeout(() => {
      setNewReleased(moviesList);
      setCategoryChips(chipsList);
      setLoaded(true);
    }, 3000);
  }, []);

  const seeMoreHandler = () => {
    setNewReleased((prev) => {
      const newMovies = [
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
        {
          id: "0100",
          title: "Churuli",
          year: 2021,
          category: "Mystery/Sci-Fi",
          lang: "Malayalam",
          img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Churuli.jpeg/220px-Churuli.jpeg",
        },
        {
          id: "1000",
          title: "Pushpa: The Rise",
          year: 2021,
          category: "Action/Drama",
          lang: "Telugu",
          img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Pushpa_-_The_Rise_%282021_film%29.jpg/220px-Pushpa_-_The_Rise_%282021_film%29.jpg",
        },
      ];

      return [...prev, ...newMovies];
    });
  };

  return (
    <div className="page">
      <MoviesRow
        title="Recently Uploaded"
        movieList={newReleased}
        loaded={loaded}
        seeMoreHandler={seeMoreHandler}
      />
      <ChipsRow
        title="Search by category"
        chipLists={categoryChips}
        loaded={loaded}
      />
      <MoviesRow
        title="Most Downloaded"
        movieList={newReleased}
        loaded={loaded}
        seeMoreHandler={seeMoreHandler}
        last
      />
    </div>
  );
}
