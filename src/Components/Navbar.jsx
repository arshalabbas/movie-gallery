import React, { useState, useRef } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Navbar,
  Row,
  Col,
} from "react-bootstrap";

import { Link } from "react-router-dom";

import "./Navbar.scss";

export default function Navbarr({ brandName }) {
  const [searchQuery, setSearchQuery] = useState("");
  const searchButton = useRef();

  const onChangeHandler = (event) => setSearchQuery(event.target.value);
  const onKeyPressHandler = (event) => {
    if (event.key === "Enter") {
      if (!searchQuery) return;
      searchButton.current.click();
    }
  };

  return (
    <Navbar bg="dark" varient="dark" className="py-3" fixed="top">
      <Container>
        <Row className="w-100 justify-content-between align-items-center">
          <Col md="auto">
            <Link to="/" className="text-decoration-none">
              <Navbar.Brand className="text-primary mx-2 fs-4">
                {brandName}
              </Navbar.Brand>
            </Link>
          </Col>
          <Col md="auto">
            <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <FormControl
                type="search"
                aria-label="search"
                className="search-field mx-2 bg-secondary border-0 text-light"
                placeholder="Search the movies..."
                onChange={onChangeHandler}
                value={searchQuery}
                onKeyPress={onKeyPressHandler}
              />
              <Button
                className="text-light"
                varient="primary"
                href={`/search/?query=${searchQuery.trim()}`}
                ref={searchButton}
                disabled={searchQuery ? false : true}
              >
                <i className="bi bi-search"></i>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
