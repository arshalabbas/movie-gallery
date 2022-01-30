import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  ToggleButton,
  ButtonGroup,
} from "react-bootstrap";

import { Heading } from "./BasicComponents";
import MoviesRow from "./MoviesRow";

function ChipsRow({ title, chipsList, onChange, moviesList, loaded }) {
  const [currentChip, setCurrentChip] = useState("1");
  const onChipChangeHandler = (e) => {
    setCurrentChip(e.currentTarget.value);
    if (onChange !== undefined)
      onChange(chipsList[parseInt(e.currentTarget.value) - 1]);
  };

  return (
    <>
      <Container>
        <Heading title={title} />
        <Row className="text-center">
          <Col>
            {chipsList?.map((chip, index) => (
              <ToggleButton
                key={index}
                id={`radio-${index}`}
                type="radio"
                variant="primary"
                name="radio"
                value={chip.value}
                checked={currentChip === chip.value}
                onChange={onChipChangeHandler}
                className="m-2 px-3 rounded-pill"
              >
                {chip.name}
              </ToggleButton>
            ))}
          </Col>
        </Row>
      </Container>
      {loaded ? (
        moviesList.length ? (
          <MoviesRow
            title={`${chipsList[currentChip - 1].name} Movies`}
            moviesList={moviesList}
            loaded={loaded}
            last
          />
        ) : (
          <Heading
            title="No movies found :,)"
            color="text-secondary"
            className="text-center"
          />
        )
      ) : (
        <Heading
          title="Loading..."
          color="text-secondary"
          className="text-center text-secondary"
        />
      )}
    </>
  );
}

export default ChipsRow;
