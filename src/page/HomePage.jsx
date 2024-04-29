import React from "react";
import Tokenblock from "../components/Home/Tokenblock";
import Securityblock from "../components/Securityblock/Securityblock";

const HomePage = () => {
  return (
    <>
      <Tokenblock />
      <Securityblock />
      {/* <Securityblock/>
            <Advantagesblock/>
            <Requestblock/> */}
    </>
  );
};

export default HomePage;
