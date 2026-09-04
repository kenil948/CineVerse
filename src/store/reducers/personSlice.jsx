import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
  loading: false,
  error: null,
};

export const personSlice = createSlice({
  name: "person",
  initialState,

  reducers: {
    startLoading: (state) => {
      state.loading = true;
      state.error = null;
    },

    loadperson: (state, action) => {
      state.info = action.payload;
      state.loading = false;
      state.error = null;
    },

    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    removeperson: (state) => {
      state.info = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { startLoading, loadperson, setError, removeperson } =
  personSlice.actions;

export default personSlice.reducer;
