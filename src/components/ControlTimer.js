import React from "react";
import { useDispatch } from "react-redux";
import { startStopTimerAction, resetAction } from "../redux/clockSlice";
import { Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export const ControlTimer = (props) => {
  const dispath = useDispatch();

  const startStopTimer = () => {
    dispath(startStopTimerAction());
  };

  const reset = () => {
    dispath(resetAction());
    props.stopBeep();
  };

  return (
    <section className="control-timer">
      <Row className="justify-content-center">
        <button
          id="start_stop"
          className="control-timer-btn"
          onClick={startStopTimer}
        >
          <FontAwesomeIcon icon={faPlay} />
          <FontAwesomeIcon icon={faPause} />
        </button>
        <button id="reset" className="control-timer-btn" onClick={reset}>
          <FontAwesomeIcon icon={faRedo} />
        </button>
      </Row>
    </section>
  );
};
