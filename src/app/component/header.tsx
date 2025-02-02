import React from "react";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className="w-full h-[50px] bg-black text-white flex justify-center items-center px-4  z-20">
        <h2 className="text-[24px] font-bold">
          <span className="text-[#FF9F0D]">Food</span>Tuck
        </h2>
      </header>
    </>
  );
}

export default Header;
