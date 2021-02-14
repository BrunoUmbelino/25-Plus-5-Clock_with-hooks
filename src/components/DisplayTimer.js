import React from "react";
import { Col, Row } from 'reactstrap'

export const DisplayTimer = (props) => {
  return (
    <section className="display-timer">
      <Row>
        <Col>
          <Row className="justify-content-center">
            <h3 id="timer-label">{props.inBreak ? "Break" : "Session"}</h3>
          </Row>
          <Row className="justify-content-center">
            <div id="time-left">{props.getTimer()}</div>
          </Row>
        </Col>
      </Row>
    </section>
  );
};
