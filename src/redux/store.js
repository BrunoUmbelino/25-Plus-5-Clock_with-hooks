import { configureStore } from "@reduxjs/toolkit";
import clockReducers from "../redux/clockSlice";

export default configureStore({
  reducer: {
    clock: clockReducers,
  },
});
