import React from "react";
import Securityblock from "../components/Securityblock/Securityblock";
import Tokenblock from "../components/Tokenblock/Tokenblock";
import Advantagesblock from "../components/Advantagesblock/Advantagesblock";
import RatesBlock from "../components/RatesBlock/RatesBlock";

const HomePage = () => {
  return (
    <>
      <Tokenblock />
      <Securityblock />
      <Advantagesblock />
      <RatesBlock />
      {/* <Securityblock/>
            <Advantagesblock/>
            <Requestblock/> */}
    </>
  );
};

export default HomePage;
