import React from "react";
import img from "../../images/carousel-2.jpg";

const HomeHeader = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Explore the World with Travel Portal.Enjoy your Best Travel with
            Us.The Best Reliable Choice for every Traveler.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
