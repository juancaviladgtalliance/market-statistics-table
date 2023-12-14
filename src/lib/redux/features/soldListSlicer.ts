import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { intialSoldList } from "../../../constants";
import { DataData } from "../../../types";

const initialState = {
  ...intialSoldList,
};
/* 
interface DataInput {
  url: string;
  body: FormData;
}
export const getBuildings = createAsyncThunk(
  "soldList/getBuildings",
  async (dataInput: DataInput) => {
    try {
      const response = await fetch(dataInput.url, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Headers":
            "Content-Type, Authorization, access-control-allow-origin",
          Authorization:
            "Basic " +
            btoa(
              import.meta.env.VITE_USERNAME_NEIGHBORHOOD +
                ":" +
                import.meta.env.VITE_PASSWORD_NEIGHBORHOOD
            ),
        },
        body: dataInput.body,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }
);
 */
const soldListSlicer = createSlice({
  name: "soldList",
  initialState,
  reducers: {
    setSoldList: (state, action: PayloadAction<DataData>) => {
      state.error = action.payload.error;
      state.request = action.payload.request;
      state.response = action.payload.response;
    },
  },
});

export const { setSoldList } = soldListSlicer.actions;
export default soldListSlicer.reducer;
