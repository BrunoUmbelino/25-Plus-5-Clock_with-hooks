import React from "react";
import { Col, Label, Row } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, } from "@fortawesome/free-solid-svg-icons";

export const ConfigTimer = (props) => {
  return (
    <section className="config-timer">
      <Row className="justify-content-beetwen">
        <Col>
          <Label id="break-label">Break</Label>
        </Col>
        <Col>
          <Label id="session-label">Session</Label>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className="align-items-center justify-content-center">
            <button
              id="break-decrement"
              className="config-timer-btn"
              onClick={props.breakDecrement}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <div id="break-length">{props.breakLength}</div>
            <button
              id="break-increment"
              className="config-timer-btn"
              onClick={props.breakIncrement}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </Row>
        </Col>
        <Col>
          <Row className="align-items-center justify-content-center">
            <button id="session-decrement" onClick={props.sessionDecrement}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <div id="session-length">{props.sessionLength}</div>
            <button id="session-increment" onClick={props.sessionIncrement}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </Row>
        </Col>
      </Row>
    </section>
  );
};
