import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";

export const DisplayTimer = (props) => {
  const timer = useSelector((state) => state.clock.timer);
  const inBreak = useSelector((state) => state.clock.inBreak);

  const getTimer = () => {
    let minutes = Math.floor(timer / 60);
    let seconds = timer - minutes * 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.title = `(${minutes}:${seconds}) Pomodoro Clock`;
    return `${minutes}:${seconds}`;
  };

  return (
    <section className="display-timer">
      <div>
        <Row>
          <Col>
            <Row className="justify-content-center">
              <h3 id="timer-label">{inBreak ? "Break" : "Session"}</h3>
            </Row>
            <Row className="justify-content-center">
              <div id="time-left">{getTimer()}</div>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};
