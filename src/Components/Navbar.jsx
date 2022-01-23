import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Navbar,
  Row,
  Col,
} from "react-bootstrap";

import "./Navbar.scss";

export default function Navbarr() {
  return (
    <Navbar bg="dark" varient="dark" className="py-3" fixed="top">
      <Container>
        <Row className="w-100 justify-content-between align-items-center">
          <Col md="auto">
            <Navbar.Brand href="#" className="text-primary mx-2 fs-4">
              MovieGallery
            </Navbar.Brand>
          </Col>
          <Col md="auto">
            <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <FormControl
                type="search"
                aria-label="search"
                className="search-field mx-2 bg-secondary border-0 text-light"
                placeholder="Search the movies..."
              />
              <Button className="text-light" varient="primary">
                <i className="bi bi-search"></i>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
