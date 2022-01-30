import React, { useEffect, useState } from "react";

import MoviesRow from "../../Components/MoviesRow";
import ChipsRow from "../../Components/ChipsRow";

export default function Home({ title }) {
  document.title = title;

  const [newReleased, setNewReleased] = useState([1, 1, 1, 1]);
  const [byLanguage, setByLanguage] = useState([1, 1, 1, 1]);
  const [languagesChips, setLanguagesChips] = useState([]);
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
      { name: "English", value: "1" },
      { name: "Malayalam", value: "2" },
      { name: "Tamil", value: "3" },
      { name: "Hindi", value: "4" },
      { name: "Telugu", value: "5" },
    ];

    setTimeout(() => {
      setNewReleased(moviesList);
      setLanguagesChips(chipsList);
      setByLanguage(
        moviesList.filter((movie) => movie.lang === chipsList[0].name)
      );
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

  const onChipChangeHandler = (e) => {
    const moviesList = [
      {
        id: "122631",
        title: "Spider-Man No Way HosetCategoryChipsme",
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

    setByLanguage(moviesList.filter((movie) => movie.lang == e.name));
  };

  return (
    <div className="page">
      <MoviesRow
        title="Recently Uploaded"
        moviesList={newReleased}
        loaded={loaded}
        seeMoreHandler={seeMoreHandler}
      />
      <ChipsRow
        title="Search by Languages"
        chipsList={languagesChips}
        loaded={loaded}
        moviesList={byLanguage}
        onChange={onChipChangeHandler}
      />
    </div>
  );
}
