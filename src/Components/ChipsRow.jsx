import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { Heading, Devider } from "./BasicComponents";

function ChipsRow({ title, chipLists, last }) {
  return (
    <Container>
      <Heading title={title} />
      <Row className="text-center">
        <Col className="w-80">
          {chipLists.map((chip) => (
            <Button
              className="m-3 px-3 rounded-pill"
              variant="primary"
              key={chip.id}
            >
              {chip.name}
            </Button>
          ))}
        </Col>
      </Row>
      <Heading
        title="See more..."
        color="link-primary"
        className="text-center link link-primary fs-5"
      />
      {!last ? <Devider /> : null}
    </Container>
  );
}

export default ChipsRow;
