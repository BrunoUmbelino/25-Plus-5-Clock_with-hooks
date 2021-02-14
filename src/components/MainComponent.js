import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";

import { DisplayTimer } from "./DisplayTimer";
import { ControlTimer } from "./ControlTimer";
import { ConfigTimer } from "./ConfigTimer";

export const Main = () => {
  const [timer, setTimer] = useState(1500);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [inSession, setInSession] = useState(false);
  const [inBreak, setInBreak] = useState(false);
  const [timerActivated, setTimerActivated] = useState(false);

  const stopBeep = () => {
    const alarm = document.getElementById("beep");
    alarm.pause();
    alarm.currentTime = 0;
  };

  const playBeep = () => {
    const alarm = document.getElementById("beep");
    alarm.volume = 0.6;
    alarm.play();
  };

  const breakDecrement = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  const breakIncrement = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  const sessionDecrement = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimer((sessionLength - 1) * 60);
    }
  };

  const sessionIncrement = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimer((sessionLength + 1) * 60);
    }
  };

  const startStopTimer = () => {
    if (!inSession) {
      setTimerActivated(true);
      setInSession(!inSession);
    } else {
      setTimerActivated(false);
      setInSession(!inSession);
    }
  };

  const getTimer = () => {
    let minutes = Math.floor(timer / 60);
    let seconds = timer - minutes * 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${minutes}:${seconds}`;
  };

  const reset = () => {
    stopBeep();
    setBreakLength(5);
    setSessionLength(25);
    setTimer(1500);
    setInSession(false);
    setInBreak(false);
    setTimerActivated(false);
  };

  useEffect(() => {
    if (timerActivated) {
      const decreaseTimer = () => {
        if (timer > 0) {
          setTimer((timer) => timer - 1);
        } else if (timer === 0 && inBreak === false) {
          setTimer(breakLength * 60);
          playBeep();
          setInBreak(true);
        } else {
          setTimer(sessionLength * 60);
          playBeep();
          setInBreak(false);
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
          <DisplayTimer getTimer={getTimer} inBreak={inBreak} timer={timer} />
          <ControlTimer startStopTimer={startStopTimer} reset={reset} />
        </div>
        <ConfigTimer
          breakDecrement={breakDecrement}
          breakIncrement={breakIncrement}
          breakLength={breakLength}
          sessionDecrement={sessionDecrement}
          sessionIncrement={sessionIncrement}
          sessionLength={sessionLength}
        />
        <Row className="author justify-content-center">
          <p>By Bruno Umbelino</p>
        </Row>
        <audio
          id="beep"
          src="https://res.cloudinary.com/djiuzmp1e/video/upload/v1612314359/samples/mixkit-repeating-arcade-beep-1084_nz4wjf.wav"
          preload="auto"
        ></audio>
      </Container>
    </div>
  );
};

export default Main;
