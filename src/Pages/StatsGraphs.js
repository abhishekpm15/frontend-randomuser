import React from "react";
import Header from "../components/Header";
import MiddleComponent from "../components/MiddleComponent";

const StatsGraphs = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-900 h-[250px]">
        <MiddleComponent
          heading="STATS & GRAPHS"
          para="Check out how awsome we are !"
        />
      </div>
    </div>
  );
};

export default StatsGraphs;
