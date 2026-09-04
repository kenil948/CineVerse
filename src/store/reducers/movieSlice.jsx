import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
  loading: false,
  error: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.info = null;
    },

    loadmovie: (state, action) => {
      state.info = action.payload;
      state.loading = false;
      state.error = null;
    },

    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    removemovie: (state) => {
      state.info = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { startLoading, loadmovie, setError, removemovie } =
  movieSlice.actions;

export default movieSlice.reducer;
