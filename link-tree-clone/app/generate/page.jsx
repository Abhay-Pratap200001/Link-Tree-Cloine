"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Generate = () => {
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, sethandle] = useState("");
  const [pic, setPic] = useState("");

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      links: links,
      handle: handle,
      pic: pic
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const r = await fetch(
      "http://localhost:3000/api/add/generate",
      requestOptions,
    );
    sethandle(" ")
    setLinks([])
    setPic(" ")
    const result = await r.json();
    if (result.success) {
      toast.success(result.message);
    }else{
      toast.error(result.message)
    }
    
  };


  const handleChange = (index, link, linktext) => {
    setLinks((intialLinks) => {
      return intialLinks.map((item, idx) => {
        if (idx === index) {
          return { link, linktext };
        } else {
          return item;
        }
      });
    });
  };


  const addLink = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]));
  };


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
                onChange={(e) => {
                  sethandle(e.target.value);
                }}
                value={handle}
                type="text"
                placeholder="Choose a Handler"
                className="bg-white py-4 px-7 p-10 focus:outline-slate-50 rounded-2xl"
              />
            </div>

            <h2 className="font-semibold text-3xl">Step 2: Add Links</h2>

            {links &&
              links.map((item, index) => {
                return (
                  <div className="flex gap-3" key={index}>

                    {/* //Link-Text-Input */}
                    <input
                      onChange={e=>{handleChange(index, item.link, e.target.value)}}
                      value={item.linktext}
                      type="text"
                      placeholder="Enter link text"
                      className="bg-white py-4 px-7 focus:outline-slate-50 rounded-2xl"
                    />

                    {/* //Link-Input */}
                    <input
                      value={item.link}
                      onChange={e=>{handleChange(index, e.target.value, item.linktext)}}
                      type="text"
                      placeholder="Enter link"
                      className="bg-white py-4 px-7 focus:outline-slate-50 rounded-2xl"
                    />
                  </div>
                );
              })}

            <button
              onClick={() => addLink()}
              className="w-[10vw]  border-2 border-black hover:bg-gray-800 hover:text-white bg-black p-2 transition-all duration-200 hover:font-medium rounded-3xl text-neutral-300 text-2xl"
            >
              Add Link
            </button>
          </div>

          <h2 className="font-semibold text-3xl pt-3">
            Step 3: Add Picture and Finalize
          </h2>
          <input
            onChange={(e) => setPic(e.target.value)}
            value={pic}
            type="text"
            placeholder="Enter link to you picture"
            className="bg-white py-4 px-7 focus:outline-slate-50 rounded-2xl"
          />
          <button disabled={pic === "" || handle === "" || links[0].linktext === ""} onClick={()=>{submitLinks()}} className="w-[10vw]  border-2 border-black hover:bg-gray-800 disabled:text-slate-600 hover:text-white bg-black p-2 disabled:bg-slate-700 transition-all duration-200 hover:font-medium rounded-3xl text-neutral-300 text-2xl">
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
