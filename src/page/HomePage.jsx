import React from "react";
import Securityblock from "../components/Securityblock/Securityblock";
import Tokenblock from "../components/Tokenblock/Tokenblock";
import Advantagesblock from "../components/Advantagesblock/Advantagesblock";

const HomePage = () => {
  return (
    <>
      <Tokenblock />
      <Securityblock />
      <Advantagesblock />
      {/* <Securityblock/>
            <Advantagesblock/>
            <Requestblock/> */}
    </>
  );
};

export default HomePage;
