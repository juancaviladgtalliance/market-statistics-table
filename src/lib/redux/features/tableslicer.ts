import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MarketStatisticDataList } from "../../../types";
import { sortArrayByList } from "../../../helpers/sortByList";
import { neighborhoodstitle } from "../../../constants";

export const getAsyncCities = createAsyncThunk(
  "tables/getAsyncCities",
  async () => {
    const url = import.meta.env?.DEV
        ? import.meta.env.VITE_DEV_URL_NEIGHBORHOODS
        : import.meta.env.VITE_URL_NEIGHBORHOODS,
      user = import.meta.env?.DEV
        ? import.meta.env.VITE__DEV_USERNAME
        : import.meta.env.VITE_USERNAME,
      pass = import.meta.env?.DEV
        ? import.meta.env.VITE_DEV_PASSWORD
        : import.meta.env.VITE_PASSWORD;
    const controller = new AbortController();
    // console.log(user, pass);
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        Authorization: "Basic " + btoa(user + ":" + pass),
      },
    });

    const data = await response.json();
    // console.log(data);

    const result = sortArrayByList(data.cities, neighborhoodstitle);
    // console.log(result);
    return result;
  }
);

export interface tableState {
  cities: [] | MarketStatisticDataList;
  failed: string | null;
}
export const initialState: tableState = {
  cities: [],
  failed: null,
};
const tableSlicer = createSlice({
  name: "tables",
  initialState,
  reducers: {
    setDataTable: (state, action: PayloadAction<MarketStatisticDataList>) => {
      state.cities = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAsyncCities.fulfilled, (state, action) => {
      //  console.log("addcase", action.payload);
      state.cities = action.payload;
    }),
      builder.addCase(getAsyncCities.rejected, (state) => {
        state.failed = "error";
      });
  },
});
export const { setDataTable } = tableSlicer.actions;

export default tableSlicer.reducer;
