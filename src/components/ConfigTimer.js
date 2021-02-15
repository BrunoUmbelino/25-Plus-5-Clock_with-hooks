import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  breakDecrementAction,
  breakIncrementAction,
  sessionDecrementAction,
  sessionIncrementAction,
} from "../redux/clockSlice";
import { Col, Label, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export const ConfigTimer = (props) => {
  const breakLength = useSelector((state) => state.clock.breakLength);
  const sessionLength = useSelector((state) => state.clock.sessionLength);

  const dispatch = useDispatch();

  const breakDecrement = () => {
    dispatch(breakDecrementAction());
  };

  const breakIncrement = () => {
    dispatch(breakIncrementAction());
  };

  const sessionDecrement = () => {
    dispatch(sessionDecrementAction());
  };

  const sessionIncrement = () => {
    dispatch(sessionIncrementAction());
  };

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
              onClick={breakDecrement}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <div id="break-length">{breakLength}</div>
            <button
              id="break-increment"
              className="config-timer-btn"
              onClick={breakIncrement}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </Row>
        </Col>
        <Col>
          <Row className="align-items-center justify-content-center">
            <button id="session-decrement" onClick={sessionDecrement}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <div id="session-length">{sessionLength}</div>
            <button id="session-increment" onClick={sessionIncrement}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </Row>
        </Col>
      </Row>
    </section>
  );
};
