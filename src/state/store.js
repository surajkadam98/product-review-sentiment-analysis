import { configureStore } from '@reduxjs/toolkit';
import quickInsightReducer from './quickInsight/quickInsightSlice';
import testHistoryReducer from './testHistory/testHistorySlice'

export const store = configureStore({
  reducer: {
    quickInsight: quickInsightReducer,
    testHistory: testHistoryReducer
  },
});
