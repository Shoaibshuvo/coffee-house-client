import React from "react";
import bannerImg from '../../../../assets/home.png'
const Banner = () => {
  return (
    <>
      <div
        className="hero h-[800px] relative"
        style={{backgroundImage: `url(${bannerImg})`}}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content absolute top-auto right-auto lg:right-20">
          <div className="max-w-xl">
            <h1 className="mb-5 text-4xl font-semibold italic">Would you like a Cup of Delicious Coffee?</h1>
            <p className="mb-5 italic">
            It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
            </p>
            <button className="btn bg-yellow-600 italic border-0">Learn More</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Banner;
