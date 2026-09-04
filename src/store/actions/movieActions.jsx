import axios from "../.././Axios";
import { startLoading, loadmovie, setError } from "../reducers/movieSlice";

export { removemovie } from "../reducers/movieSlice";

export const getMovie = (id) => async (dispatch) => {
  try {
    dispatch(startLoading());

    const [
      detail,
      externalids,
      recommendations,
      similar,
      video,
      watchproviders,
      credits,
    ] = await Promise.all([
      axios.get(`/movie/${id}`),
      axios.get(`/movie/${id}/external_ids`),
      axios.get(`/movie/${id}/recommendations`),
      axios.get(`/movie/${id}/similar`),
      axios.get(`/movie/${id}/videos`),
      axios.get(`/movie/${id}/watch/providers`),
      axios.get(`/movie/${id}/credits`),
    ]);

    const director = credits.data.crew.find(
      (person) => person.job === "Director",
    );

    const theUltimateMovie = {
      detail: detail.data,
      externalids: externalids.data,
      recommendations: recommendations.data.results || [],
      similar: similar.data.results || [],
      video: video.data.results.find(
        (v) => v.type === "Trailer" && v.site === "YouTube",
      ),
      watchproviders: watchproviders.data?.results?.IN || null,
      cast: credits.data.cast || [],
      director,
    };

    dispatch(loadmovie(theUltimateMovie));
  } catch (error) {
    dispatch(setError(error.response?.data?.status_message || error.message));
  }
};
