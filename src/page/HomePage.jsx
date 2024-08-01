import React from "react";
import Securityblock from "../components/Securityblock/Securityblock";
import Tokenblock from "../components/Tokenblock/Tokenblock";
import Advantagesblock from "../components/Advantagesblock/Advantagesblock";
import RatesBlock from "../components/RatesBlock/RatesBlock";
import ApplicationBlock from "../components/ApplicationBlock/ApplicationBlock";

const HomePage = () => {
  return (
    <>
      <RatesBlock />
      <Tokenblock />
      <Securityblock />
      <Advantagesblock />
      <ApplicationBlock />
      {/* <Securityblock/>
            <Advantagesblock/>
            <Requestblock/> */}
    </>
  );
};

export default HomePage;
