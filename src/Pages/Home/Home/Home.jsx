import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Intro from "../Intro/Intro";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Intro />
      <PopularMenu />
    </div>
  );
};

export default Home;
