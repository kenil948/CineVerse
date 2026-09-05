import axios from "../.././Axios";
import { startLoading, loadtv, setError } from "../reducers/tvSlice";

export { removetv } from "../reducers/tvSlice";

export const getTv = (id) => async (dispatch) => {
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
      axios.get(`/tv/${id}`),
      axios.get(`/tv/${id}/external_ids`),
      axios.get(`/tv/${id}/recommendations`),
      axios.get(`/tv/${id}/similar`),
      axios.get(`/tv/${id}/videos`),
      axios.get(`/tv/${id}/watch/providers`),
      axios.get(`/tv/${id}/credits`),
    ]);

    const director = credits.data.crew.find(
      (person) => person.job === "Director",
    );

    const theUltimateTv = {
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

    dispatch(loadtv(theUltimateTv));
  } catch (error) {
    dispatch(setError(error.response?.data?.status_message || error.message));
  }
};
