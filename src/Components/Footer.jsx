import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Heading } from "./BasicComponents";

function Footer({ brandName }) {
  return (
    <div className="bg-black py-4">
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col md="auto">
            <Link to="/" className="text-decoration-none">
              <Heading
                title={brandName}
                color="primary"
                className="fs-3 link-primary cursor-pointer"
              />
            </Link>
          </Col>
          <Col md="auto">
            <p className="text-light mb-0">
              Copyright &copy; 2022{" "}
              <span className="text-primary">{brandName}</span>. All Rights
              Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
