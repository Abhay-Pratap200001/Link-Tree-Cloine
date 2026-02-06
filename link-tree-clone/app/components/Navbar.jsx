import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <nav className="bg-white max-w-5xl justify-between flex fixe absolute w-[80vw] top-10 right rounded-full p-7">
        <div className="flex gap-8 items-center">
          <img
            className="h-7"
            src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
            alt=""
          />

          <ul className="flex gap-4 text-[#1e2330] font-medium">
            <li>products</li>
            <li>Templates</li>
            <li>Marketplace</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="flex gap-3">
          <button className="border border-transparent bg-[#eff0ecd1] rounded-md p-1 w-16 font-medium">
            login
          </button>
          <button className="border border-transparent bg-[#1e2330] rounded-full p-1 w-26 text-white font-medium">
            signup free
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
