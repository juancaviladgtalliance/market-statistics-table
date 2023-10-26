import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  activeNeighborhood: 144,
};
const iusSlicer = createSlice({
  name: "ius",
  initialState,
  reducers: {
    setActiveNeighborhood: (state, action: PayloadAction<number>) => {
      state.activeNeighborhood = action.payload;
    },
  },
});
export const { setActiveNeighborhood } = iusSlicer.actions;
export default iusSlicer.reducer;
