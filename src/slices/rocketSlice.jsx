import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useRocketService from "../services/RocketService";

export const fetchRockets = createAsyncThunk(
  "rockets/fetchRockets",
  async () => {
    const { getAllRocket } = useRocketService();
    const response = await getAllRocket();
    return response;
  }
);

export const fetchRocket = createAsyncThunk(
  "rockets/fetchRockets",
  async () => {
    const { getRocket } = useRocketService();
    const response = await getRocket();
    return response;
  }
);

const rocketSlice = createSlice({
  name: "rockets",
  initialState: {
    rockets: [],
    selectedRocket: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default rocketSlice.reducer;
