
import SearchBar from "../SearchBar";

const Topbar = () => {

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
      <div>
        <p className="text-xs uppercase tracking-[3px] text-zinc-500">
          TODAY'S PICKS
        </p>
        <h1 className="text-2xl md:text-4xl font-bold text-white mt-2">Discover</h1>
        <p className="text-zinc-400 mt-2">
          Explore trending movies and TV shows.
        </p>
      </div>

     <SearchBar mediaType="multi" />
    </div>
  );
};

export default Topbar;
