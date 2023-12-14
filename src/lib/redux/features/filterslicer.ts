import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  monthRanges,
  propertyTypes,
  propertyStyles,
  priceRanges,
} from "../../../constants";
import { initialFilters } from "../../../types";

const initialState: initialFilters = {
  range: monthRanges[3].value,
  type: propertyTypes.condos.value,
  neighborhood: 0,
  style: propertyStyles.NoStyle.value,
  price: priceRanges["0-1"].value,
  sortListing: "last_updated-desc",
  pagination: {
    current: 1,
    total: 1,
    pageSize: 24,
  },
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
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
    setSorting: (state, action) => {
      state.sortListing = action.payload;
    },
  },
});
export const {
  setRanges,
  setTypes,
  setStyles,
  setNeighborhood,
  setPrice,
  setPagination,
  setSorting,
} = filterSlicer.actions;

export default filterSlicer.reducer;
