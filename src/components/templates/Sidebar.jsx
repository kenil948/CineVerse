
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { BiCameraMovie, BiMenu } from "react-icons/bi";
import { IoMdTrendingUp } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import { MdMovie, MdPeopleAlt } from "react-icons/md";
import { IoTv, IoInformationCircleSharp, IoCallSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const browseLinks = [
    {
      name: "Trending",
      path: "/trending",
      icon: <IoMdTrendingUp />,
    },
    {
      name: "Popular",
      path: "/popular",
      icon: <BsStars />,
    },
    {
      name: "Movies",
      path: "/movies",
      icon: <MdMovie />,
    },
    {
      name: "TV Shows",
      path: "/tv-shows",
      icon: <IoTv />,
    },
    {
      name: "Actors",
      path: "/person",
      icon: <MdPeopleAlt />,
    },
  ];

  const generalLinks = [
    {
      name: "About",
      path: "/about",
      icon: <IoInformationCircleSharp />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <IoCallSharp />,
    },
  ];

  const navClass = ({ isActive }) =>
    `flex items-center gap-4 px-4 py-2.5 rounded-xl border-l-[3px] transition-all duration-200

    ${isActive
      ? "border-[#C1121F] bg-zinc-800/60 text-white"
      : "border-transparent text-zinc-400 hover:bg-zinc-800/30 hover:text-white"
    }
  `;

  return (
    <>
      {/* Mobile Hamburger Button (visible when sidebar is closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800 text-white shadow-xl hover:border-zinc-700 transition cursor-pointer"
          aria-label="Open Navigation"
        >
          <BiMenu size={20} />
        </button>
      )}

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden transition-opacity"
        />
      )}

      <aside
        className={`fixed left-0 top-0 w-[260px] sm:w-[280px] h-dvh bg-[#0E0E11] border-r border-zinc-800 flex flex-col z-50 overflow-y-auto scrollbar-none transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="px-5 pt-4 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BiCameraMovie className="text-2xl md:text-3xl text-white" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                CineVerse
              </h1>
              <p className="text-xs text-zinc-500">Discover Movies</p>
            </div>
          </div>

          {/* Dedicated Close Button inside Mobile Sidebar Header */}
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden flex items-center justify-center rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition cursor-pointer"
            aria-label="Close Sidebar"
          >
            <RxCross2 size={22} />
          </button>
        </div>

        <hr className="border-zinc-800" />

        <div className="px-5 mt-3">
          <p className="text-[11px] uppercase tracking-[3px] text-zinc-500 font-semibold">
            Browse
          </p>
        </div>
        <nav className="mt-2 px-3 space-y-1">
          {browseLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={navClass}
            >
              <span className="text-lg">{link.icon}</span>

              <span className="font-medium text-sm sm:text-base">{link.name}</span>
            </NavLink>
          ))}
        </nav>

        <hr className="mx-5 my-3 border-zinc-800" />

        <div className="px-5">
          <p className="text-[11px] uppercase tracking-[3px] text-zinc-500 font-semibold">
            General
          </p>
        </div>

        <nav className="mt-1 px-3 space-y-1">
          {generalLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={navClass}
            >
              <span className="text-xl">{link.icon}</span>

              <span className="font-medium text-sm sm:text-base">{link.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto px-5 pt-3 pb-6 border-t border-zinc-800">
          <p className="text-[11px] uppercase tracking-widest text-zinc-600">
            Powered by TMDB
          </p>

          <p className="mt-1 text-xs text-zinc-500">© 2026 CineVerse</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
