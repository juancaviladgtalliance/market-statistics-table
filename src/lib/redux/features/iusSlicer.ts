import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UiInitialState } from "../../../types";
import { uiInitialState } from "../../../constants";
import { NeighborhoodItem } from "../../../types";

const initialState: UiInitialState = uiInitialState;
const iusSlicer = createSlice({
  name: "ius",
  initialState,
  reducers: {
    setActiveNeighborhood: (state, action: PayloadAction<number>) => {
      state.activeNeighborhood = action.payload;
    },
    setNeighborhoodList: (state, action: PayloadAction<NeighborhoodItem[]>) => {
      state.neighborhoodList = action.payload;
    },
    setMmarketStatisticTitle: (state, action: PayloadAction<string>) => {
      if (action.payload !== initialState.marketStatisticTitle) {
        state.marketStatisticTitle = action.payload;
      } else {
        state.marketStatisticTitle = initialState.marketStatisticTitle;
      }
    },
  },
});
export const {
  setActiveNeighborhood,
  setMmarketStatisticTitle,
  setNeighborhoodList,
} = iusSlicer.actions;
export default iusSlicer.reducer;
