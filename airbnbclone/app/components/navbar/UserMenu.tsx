"use client";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
    console.log("hello")
  }, []); 
  

  return (
    <div className="relative">
      <div className="flex flex-row items-center justify-between gap-3">
        <div
          onClick={() => {}}
          className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
            "
        >
          AirBnB your home
        </div>
        <div
          onClick={toggleOpen}
          className="
        flex
        flex-row
        items-center
        gap-3
        rounded-full
        border-[1px]
        border-neutral-200
        p-4
        md:py-1
        md:px-2
        cursor-pointer
        hover:shadow-md
        transition"
        >
          <AiOutlineMenu></AiOutlineMenu>
          <div>
            <div className="hidden md:block">
              <Avatar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
