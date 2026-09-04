import React, { useEffect, useRef, useState } from "react";

import { FaChevronDown, FaCheck } from "react-icons/fa6";
import { MdMovie } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { HiSquares2X2 } from "react-icons/hi2";

const Dropdown = ({ value, options, category }) => {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedOption = options.find((option) => option.value === value);

  const getIcon = (type) => {
    switch (type) {
      case "movie":
        return <MdMovie size={18} />;
      case "tv":
        return <PiTelevisionFill size={18} />;
      case "all":
        return <HiSquares2X2 size={18} />;

      default:
        return null;
    }
  };
  return (
    <div ref={dropdownRef} className="relative w-full sm:w-48 select-none">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 cursor-pointer hover:border-zinc-700 transition-all duration-200 active:scale-[.98]"
      >
        <div className="flex items-center gap-3">
          {getIcon(value)}

          <span className="font-medium text-white">
            {selectedOption?.label}
          </span>
        </div>

        <FaChevronDown
          className={`transition-all duration-300 ${open ? "rotate-180 text-white" : "text-zinc-500"}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-xl shadow-black/40 z-50">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                category(option.value);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between px-4 py-3 transition-all duration-200 cursor-pointer active:scale-[.98] ${
                value === option.value
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-300 hover:bg-zinc-800 hover:pl-5"
              }
            `}
            >
              <div className="flex items-center gap-3">
                {getIcon(option.value)}

                <span>{option.label}</span>
              </div>

              {value === option.value && (
                <FaCheck size={14} className="text-[#C1121F]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
