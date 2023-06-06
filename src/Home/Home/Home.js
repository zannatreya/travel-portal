import React from "react";
import Packages from "../Packages/Packages";
import Explore from "../Explore/Explore";
import HomeHeader from "../HomeHeader/HomeHeader";
import SearchTrip from "../SearchTrip/SearchTrip";

const Home = () => {
  return (
    <div>
      <HomeHeader></HomeHeader>
      <SearchTrip></SearchTrip>
      <Packages></Packages>
      <Explore></Explore>
    </div>
  );
};

export default Home;
