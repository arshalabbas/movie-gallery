import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Heading, Devider } from "../../../Components/BasicComponents";
import Card from "../../../Components/Card";

function MoviesRow({ title, movieList, loaded, last, seeMoreHandler }) {
  return (
    <Container>
      <Heading title={title} />
      <Row>
        {movieList.map((movie, index) => (
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
      <span onClick={seeMoreHandler}>
        <Heading
          title="See more..."
          color="link-primary"
          className="text-center link link-primary fs-5"
        />
      </span>

      {!last ? <Devider /> : null}
    </Container>
  );
}

export default MoviesRow;
