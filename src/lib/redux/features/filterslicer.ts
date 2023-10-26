import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  monthRanges,
  propertyTypes,
  propertyStyles,
  priceRanges,
} from "../../../constants";

const initialState = {
  range: monthRanges[3].value,
  type: propertyTypes.homes.value,
  neighborhood: 0,
  style: propertyStyles.NoStyle.value,
  price: priceRanges["0-1"].value,
};
const filterSlicer = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setRanges: (state, action: PayloadAction<number>) => {
      state.range = action.payload;
    },
    setTypes: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setStyles: (state, action: PayloadAction<string>) => {
      state.style = action.payload;
    },
    setNeighborhood: (state, action: PayloadAction<number>) => {
      state.neighborhood = action.payload;
    },
    setPrice: (state, action: PayloadAction<string>) => {
      state.price = action.payload;
    },
  },
});
export const { setRanges, setTypes, setStyles, setNeighborhood, setPrice } =
  filterSlicer.actions;

export default filterSlicer.reducer;
