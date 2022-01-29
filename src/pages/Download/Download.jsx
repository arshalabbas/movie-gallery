import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Heading } from "../../Components/BasicComponents";
import config from "../../config.json";

import "./Download.scss";

import queryString from "query-string";
import { Link } from "react-router-dom";

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

  document.title = `Download - ${
    movieDetails ? movieDetails.title : "Movie Unavailable"
  }`;

  return movieDetails ? (
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
          <div className="downloads-list mx-md-5">
            {movieDetails.urls?.map((URL, index) => (
              <div
                key={index}
                className="item text-light d-flex align-items-center justify-content-between my-3 py-3"
              >
                <p className="align-self-center">
                  {URL.title} <span className="text-primary">{URL.size}</span>
                </p>
                <Button
                  className="align-self-center"
                  href={config.downloadBaseURL + URL.urlID}
                >
                  <i className="bi bi-download"></i>{" "}
                  <span className="d-none d-md-inline">Download</span>
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  ) : (
    <div className="page d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center text-secondary my-3">
        This movie is deleted or unavailable...
      </h1>
      <Link to="/">
        <Button>
          <i className="bi bi-house-fill"></i> Go Home
        </Button>
      </Link>
    </div>
  );
}
