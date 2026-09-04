import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
  loading: false,
  error: null,
};

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.info = null;
    },

    loadtv: (state, action) => {
      state.info = action.payload;
      state.loading = false;
      state.error = null;
    },

    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    removetv: (state) => {
      state.info = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { loadtv, removetv, startLoading, setError } = tvSlice.actions;

export default tvSlice.reducer;
