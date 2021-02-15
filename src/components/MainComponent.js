import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "reactstrap";

import { DisplayTimer } from "./DisplayTimer";
import { ControlTimer } from "./ControlTimer";
import { ConfigTimer } from "./ConfigTimer";

import {
  decreaseTimerAction,
  setTimerEqualBreakAction,
  setTimerEqualSessionAction,
  toggleInBreakAction,
} from "../redux/clockSlice";


export const Main = () => {
  const timer = useSelector((state) => state.clock.timer);
  const timerActivated = useSelector((state) => state.clock.timerActivated);
  const inBreak = useSelector((state) => state.clock.inBreak);

  const dispatch = useDispatch();

  const stopBeep = () => {
    const alarm = document.getElementById("beep");
    alarm.pause();
    alarm.currentTime = 0;
  };

  const playBeep = () => {
    const alarm = document.getElementById("beep");
    alarm.src =
      "https://res.cloudinary.com/djiuzmp1e/video/upload/v1612314359/samples/mixkit-repeating-arcade-beep-1084_nz4wjf.wav";
    alarm.volume = 0.6;
    alarm.play();
  };

  useEffect(() => {
    if (timerActivated) {
      if (timer === 0) {
        playBeep();
      }

      const breakTime = timer === 0 && inBreak === false;

      const decreaseTimer = () => {
        if (timer > 0) {
          dispatch(decreaseTimerAction());
        } else if (breakTime) {
          dispatch(setTimerEqualBreakAction());
          dispatch(toggleInBreakAction());
        } else {
          dispatch(setTimerEqualSessionAction());
          dispatch(toggleInBreakAction());
        }
      };
      const interval = setInterval(decreaseTimer, 1000);
      return () => clearInterval(interval);
    }
  });

  return (
    <div className="main">
      <Container className="timer">
        <Row className="justify-content-center">
          <h1 className="title">25 + 5 Clock</h1>
        </Row>
        <div className="display-and-control-timer">
          <DisplayTimer />
          <ControlTimer stopBeep={stopBeep} />
        </div>
        <ConfigTimer />
        <Row className="author justify-content-center">
          <p>By Bruno Umbelino</p>
        </Row>
        <audio id="beep"></audio>
      </Container>
    </div>
  );
};

export default Main;
