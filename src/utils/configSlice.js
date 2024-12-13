import { createSlice } from "@reduxjs/toolkit";

const configureSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = configureSlice.actions;
export default configureSlice.reducer;
