import axios from "../../Axios";
import { startLoading, loadperson, setError } from "../reducers/personSlice";

export { removeperson } from "../reducers/personSlice";

export const getPerson = (id) => async (dispatch) => {
  try {
    dispatch(startLoading());

    const [details, externalids, movieCredits, tvCredits, images] =
      await Promise.all([
        axios.get(`/person/${id}`),
        axios.get(`/person/${id}/external_ids`),
        axios.get(`/person/${id}/movie_credits`),
        axios.get(`/person/${id}/tv_credits`),
        axios.get(`/person/${id}/images`),
      ]);

    const movies = (movieCredits.data.cast || [])
      .filter((item) => {
        const character = item.character?.toLowerCase() || "";

        return (
          item.poster_path &&
          item.vote_count > 5 &&
          item.character &&
          item.release_date &&
          new Date(item.release_date) <= new Date() &&
          !character.includes("uncredited") &&
          !character.includes("self") &&
          !character.includes("archive")
        );
      })
      .map((item) => ({
        ...item,
        media_type: "movie",
      }))
      .sort(
        (a, b) =>
          (b.popularity || 0) - (a.popularity || 0) ||
          (b.vote_count || 0) - (a.vote_count || 0),
      );

    const tvShows = (tvCredits.data.cast || [])
      .filter((item) => {
        const character = item.character?.toLowerCase() || "";

        return (
          item.poster_path &&
          item.vote_count > 5 &&
          item.character &&
          item.first_air_date &&
          new Date(item.first_air_date) <= new Date() &&
          !character.includes("uncredited") &&
          !character.includes("self") &&
          !character.includes("archive") &&
          !item.genre_ids?.includes(10767) && // Talk Show
          !item.genre_ids?.includes(10763) // News
        );
      })
      .map((item) => ({
        ...item,
        media_type: "tv",
      }))
      .sort(
        (a, b) =>
          (b.popularity || 0) - (a.popularity || 0) ||
          (b.vote_count || 0) - (a.vote_count || 0),
      );

    const directedMovies = (movieCredits.data.crew || [])
      .filter(
        (item) =>
          item.job === "Director" &&
          item.poster_path &&
          item.release_date &&
          new Date(item.release_date) <= new Date(),
      )
      .map((item) => ({
        ...item,
        media_type: "movie",
      }))
      .sort(
        (a, b) =>
          (b.popularity || 0) - (a.popularity || 0) ||
          (b.vote_count || 0) - (a.vote_count || 0),
      );

    const directedTvShows = (tvCredits.data.crew || [])
      .filter(
        (item) =>
          item.job === "Director" &&
          item.poster_path &&
          item.first_air_date &&
          new Date(item.first_air_date) <= new Date(),
      )
      .map((item) => ({
        ...item,
        media_type: "tv",
      }))
      .sort(
        (a, b) =>
          (b.popularity || 0) - (a.popularity || 0) ||
          (b.vote_count || 0) - (a.vote_count || 0),
      );

    const theUltimatePerson = {
      details: details.data,
      externalids: externalids.data,
      movies,
      tvShows,
      directedMovies,
      directedTvShows,
      images: images.data.profiles || [],
    };

    dispatch(loadperson(theUltimatePerson));
  } catch (error) {
    dispatch(setError(error.response?.data?.status_message || error.message));
  }
};
