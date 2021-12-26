import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProductData } from "./quickInsightAPI";
import { statusType } from "../../utils/constant";

const initialState = {
  status: statusType.IDLE,
  quickInsight: {},
};

export const getProductQuickInsight = createAsyncThunk(
  "quickInsight/fetchProductData",
  async (url) => {
    const response = await fetchProductData(url);
    return response.data;
  }
);

export const quickInsight = createSlice({
  name: "quickInsight",
  initialState,
  reducers: {
    clean: (state) => {
      state.quickInsight = {};
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductQuickInsight.pending, (state) => {
        state.status = statusType.LOADING;
      })
      .addCase(getProductQuickInsight.fulfilled, (state, action) => {
        state.status = statusType.INFORMATION;
        state.quickInsight = { ...action.payload };
      })
      .addCase(getProductQuickInsight.rejected, (state, action) => {
        state.status = statusType.ERROR;
        state.quickInsight = {};
      });
  },
});

export const { clean, setStatus } = quickInsight.actions;

export const quickInsightState = (state) => state.quickInsight;

export default quickInsight.reducer;
