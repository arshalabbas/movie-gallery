import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Heading } from "../../Components/BasicComponents";
import config from "../../config.json";

import "./Download.scss";

import queryString from "query-string";

export default function Download() {
  const [movieDetails, setMovieDetails] = useState({});

  document.title = `Loading... ${config.name}`;

  useEffect(() => {
    const { id } = queryString.parse(window.location.search);

    const moviesList = [
      {
        id: "122631",
        title: "Spider-Man No Way Home",
        year: 2021,
        category: "Action/Adventure",
        lang: "English",
        img: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
        urls: [
          { title: "1080p HD+ English", urlID: "123545", size: "1.43GB" },
          { title: "720p HD English", urlID: "122631", size: "800MB" },
          { title: "720p English+HIndi", urlID: "123548", size: "0.9GB" },
        ],
      },
      {
        id: "0010",
        title: "Minnal Murali",
        year: 2021,
        category: "Action/Adventure",
        lang: "Malayalam",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Minnal_Murali.jpg/220px-Minnal_Murali.jpg",
        urls: [
          { title: "1080p HD+ English", urlID: "123545", size: "1.43GB" },
          { title: "720p HD English", urlID: "122631", size: "800MB" },
          { title: "720p English+HIndi", urlID: "123548", size: "0.9GB" },
        ],
      },
      {
        id: "0100",
        title: "Churuli",
        year: 2021,
        category: "Mystery/Sci-Fi",
        lang: "Malayalam",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Churuli.jpeg/220px-Churuli.jpeg",
        urls: [
          { title: "1080p HD+ English", urlID: "123545", size: "1.43GB" },
          { title: "720p HD English", urlID: "122631", size: "800MB" },
          { title: "720p English+HIndi", urlID: "123548", size: "0.9GB" },
        ],
      },
      {
        id: "1000",
        title: "Pushpa: The Rise",
        year: 2021,
        category: "Action/Drama",
        lang: "Telugu",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Pushpa_-_The_Rise_%282021_film%29.jpg/220px-Pushpa_-_The_Rise_%282021_film%29.jpg",
        urls: [
          { title: "1080p HD+ English", urlID: "123545", size: "1.43GB" },
          { title: "720p HD English", urlID: "122631", size: "800MB" },
          { title: "720p English+HIndi", urlID: "123548", size: "0.9GB" },
        ],
      },
    ];

    setMovieDetails(moviesList.find((movie) => movie.id === id));
  }, []);

  document.title = `Download - ${movieDetails.title}`;

  return (
    <div className="page">
      <div className="banner py-5">
        <Container>
          <Row>
            <Col md={3}>
              <img
                src={movieDetails.img}
                alt="movie_banner"
                className="img-fluid"
              />
            </Col>
            <Col md="auto">
              <div className="d-flex flex-column justify-content-center h-100 text-light">
                <h1>{movieDetails.title}</h1>
                <p>
                  {movieDetails.year} ‧ {movieDetails.category}
                </p>
                <p>{movieDetails.lang}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="downloads-section">
        <Container>
          <Heading title="Downloads" className="text-center" />
          {/* {movieDetails.urls.map((movie) => (
            <div>
              <h1>{movie.title}</h1>{" "}
              <a
                target="_blank"
                href={`${config.downloadBaseURL}/${movie.urlID}`}
              >
                <Button>Download</Button>
              </a>
            </div>
          ))} */}
        </Container>
      </div>
    </div>
  );
}
