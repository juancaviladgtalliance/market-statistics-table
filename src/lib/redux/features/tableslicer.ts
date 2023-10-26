import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MarketStatisticDataList } from "../../../types";
import { sortArrayByList } from "../../../helpers/sortByList";
import { neighborhoodstitle } from "../../../constants";

export const getAsyncCities = createAsyncThunk(
  "tables/getAsyncCities",
  async () => {
    const url: string = import.meta.env?.DEV
      ? import.meta.env.VITE_DEV_URL_NEIGHBORHOOD
      : import.meta.env.VITE_PROD_URL_NEIGHBORHOOD;
    const controller = new AbortController();
    const response = await fetch(url, {
      signal: controller.signal,
      mode: "no-cors",
    });
    const string = await response.text();
    const json = string === "" ? {} : JSON.parse(string);

    const list = neighborhoodstitle;

    const result = sortArrayByList(json, list);
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
      state.cities = action.payload;
    }),
      builder.addCase(getAsyncCities.rejected, (state) => {
        state.failed = "error";
      });
  },
});
export const { setDataTable } = tableSlicer.actions;

export default tableSlicer.reducer;
