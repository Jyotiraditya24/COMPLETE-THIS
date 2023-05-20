"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div
      className="
        border-[1px]
        w-full
        md:w-auto
        py-2
        rounded-full
        shadow-sm
        transition
        cursor-pointer
        "
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px]">
          Anyweek
        </div>
        <div className="flex flex-row items-center gap-3 text-gray-600 text-sm pl-6 pr-2">
          <div className="hidden sm:block">
            Add Guest
          </div>
          <div className="border rounded-full bg-pink-500 p-2 text-white">
            <BiSearch></BiSearch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
