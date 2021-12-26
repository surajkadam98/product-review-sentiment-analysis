import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testHistory: [],
};

export const testHistory = createSlice({
  name: "testHistory",
  initialState,
  reducers: {
    testHistoryReducer: (state, action) => {
      let updatedResult = [...state.testHistory];
      updatedResult.unshift(action.payload);
      state.testHistory =  updatedResult
    }
  }
});

export const { testHistoryReducer } = testHistory.actions;

export const testHistoryState = (state) => state.testHistory;

export default testHistory.reducer;
