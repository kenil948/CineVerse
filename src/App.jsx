
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Trending from "./components/pages/Trending";
import Popular from "./components/pages/Popular";
import Movies from "./components/pages/Movies";
import TvShows from "./components/pages/TvShows";
import Person from "./components/pages/Person";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import TvShowDetails from "./tvDetailsComponents/TvDetails";
import PersonDetails from "./personDetailsComponents/PersonDetails";
import Trailer from "./components/pages/Trailer";
import MovieDetails from "./movieDetailsComponents/MovieDetails";
import MovieCast from "./movieDetailsComponents/MovieCast";
import TvShowsCast from "./tvDetailsComponents/TvShowsCast";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#222] text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/details/:id" element={<MovieDetails />}>
          <Route path="/movies/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/movies/details/:id/cast" element={<MovieCast />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/tv-shows/details/:id" element={<TvShowDetails />}>
          <Route path="/tv-shows/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv-shows/details/:id/cast" element={<TvShowsCast />} />
        <Route path="/person" element={<Person />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
