import React from "react";

const page = () => {
  return (
    <main>
      <section className="bg-[#d2e823] min-h-[100vh] grid grid-cols-2">
        <div className="flex justify-center items-center flex-col ml-[10vw gap-4">
          <p className="text-[#254f1a] text-5xl max-w-[30vw] font-bold relative right-8">
            A link in bio built for you.
          </p>
          <p className="text-[#254f1a] max-w-[34vw]">
            Join 70M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
            <div className="input flex gap-2 relative top-10">
              <input
                type="text"
                name=""
                id=""
                placeholder="linktr.ee/"
                className="bg-white px-2 py-2  w-[14vw] rounded-md focus:outline-white"
              />

              <button className="p-3 w-[13vw] h-[4vw] rounded-full bg-[#254f1a] text-white font-medium">Get started for free</button>
            </div>
          </p>
        </div>
      </section>

      <section className="bg-[#d2e823] min-h-[100vh]">hello</section>
    </main>
  );
};

export default page;
