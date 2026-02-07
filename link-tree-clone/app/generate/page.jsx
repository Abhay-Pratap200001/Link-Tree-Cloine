import React from "react";

const Generate = () => {
  return (
    <div className="bg-green-400 min-h-screen grid grid-cols-2">
      <div className="col1 flex justify-center items-center flex-col gap-6">
        <h1 className="font-bold text-5xl">Create your Bittree</h1>
        <div className="flex flex-col gap-1 p-1">
          <div className="flex flex-col gap-7">
            <div>
              <h2 className="font-semibold text-3xl flex flex-col mb-2">
                Step 1: Clam your Handle
              </h2>
              <input
                type="text"
                placeholder="Choose a Handler"
                className="bg-white py-4 px-7 p-10 focus:outline-slate-50 rounded-2xl"
              />
            </div>

            <h2 className="font-semibold text-3xl">Step 2: Add Links</h2>
            <input
              type="text"
              placeholder="Enter link text"
              className="bg-white py-4 px-7 focus:outline-slate-50 rounded-2xl"
            />

            <input
              type="text"
              placeholder="Enter link"
              className="bg-white py-4 px-7 focus:outline-slate-50 rounded-2xl"
            />

            <button className="w-[10vw]  border-2 border-black hover:bg-gray-800 hover:text-white bg-black p-2 transition-all duration-200 hover:font-medium rounded-3xl text-neutral-300 text-2xl">
              Add
            </button>
          </div>
          <h2 className="font-semibold text-3xl pt-3">
            Step 3: Add Picture and Finalize
          </h2>
          <input
            type="text"
            placeholder="Enter link to you picture"
            className="bg-white py-4 px-7 focus:outline-slate-50 rounded-2xl"
          />
          <button className="w-[10vw]  border-2 border-black hover:bg-gray-800 hover:text-white bg-black p-2 transition-all duration-200 hover:font-medium rounded-3xl text-neutral-300 text-2xl">
            Submit
          </button>
        </div>
      </div>
      <div className="col2 h-screen">
        <img
          className="h-full w-screen object-cover"
          src="https://linktr.ee/universal-login/assets/banner-login-desktop-D8selsDi.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Generate;
