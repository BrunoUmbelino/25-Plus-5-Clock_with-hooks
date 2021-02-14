import React from "react";
import { Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export const ControlTimer = (props) => {
  return (
    <section className="control-timer">
      <Row className="justify-content-center">
        <button
          id="start_stop"
          className="control-timer-btn"
          onClick={props.startStopTimer}
        >
          <FontAwesomeIcon icon={faPlay} />
          <FontAwesomeIcon icon={faPause} />
        </button>
        <button id="reset" className="control-timer-btn" onClick={props.reset}>
          <FontAwesomeIcon icon={faRedo} />
        </button>
      </Row>
    </section>
  );
};
