import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Heading, Devider } from "./BasicComponents";
import Card from "./Card";

function MoviesRow({ title, moviesList, loaded, last, seeMoreHandler, over }) {
  return (
    <Container>
      <Heading title={title} />
      <Row>
        {moviesList?.map((movie, index) => (
          <Col key={index} sm={12} md={6} lg={3}>
            <Card
              loaded={loaded}
              title={movie.title}
              img={movie.img}
              year={movie.year}
              category={movie.category}
              lang={movie.lang}
              id={movie.id}
            />
          </Col>
        ))}
      </Row>
      {!over ? (
        <span onClick={seeMoreHandler}>
          <Heading
            title="See more..."
            color="link-primary"
            className="text-center link link-primary fs-5"
          />
        </span>
      ) : null}

      {!last ? <Devider /> : null}
    </Container>
  );
}

export default MoviesRow;
