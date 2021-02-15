import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timer: 1500,
  breakLength: 5,
  sessionLength: 25,
  inSession: false,
  inBreak: false,
  timerActivated: false,
};

const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    breakDecrementAction(state) {
      const breakLength = state.breakLength;
      if (breakLength > 1) {
        state.breakLength += -1;
      }
    },
    breakIncrementAction(state) {
      const breakLength = state.breakLength;
      if (breakLength < 60) {
        state.breakLength += 1;
      }
    },
    sessionDecrementAction(state) {
      const sessionLength = state.sessionLength;
      if (sessionLength > 1) {
        state.sessionLength += -1;
        state.timer = (sessionLength - 1) * 60;
      }
    },
    sessionIncrementAction(state) {
      const sessionLength = state.sessionLength;
      if (sessionLength < 60) {
        state.sessionLength += 1;
        state.timer = (sessionLength + 1) * 60;
      }
    },
    startStopTimerAction(state) {
      state.timerActivated = !state.timerActivated;
      state.inSession = !state.inSession;
    },
    decreaseTimerAction(state) {
      state.timer += -1;
    },
    setTimerEqualBreakAction(state){
      state.timer = state.breakLength * 60
    },
    setTimerEqualSessionAction(state) {
      state.timer = state.sessionLength * 60
    },
    toggleInBreakAction(state) {
      state.inBreak = !state.inBreak
    },
    resetAction() {
      return initialState;
    },
  },
});

export const {
  breakDecrementAction,
  breakIncrementAction,
  sessionDecrementAction,
  sessionIncrementAction,
  startStopTimerAction,
  decreaseTimerAction,
  setTimerEqualBreakAction,
  setTimerEqualSessionAction,
  toggleInBreakAction,
  resetAction,
} = clockSlice.actions;

export default clockSlice.reducer;
