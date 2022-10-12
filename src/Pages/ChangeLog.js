import React from "react";
import Header from "../components/Header";
import MiddleComponent from "../components/MiddleComponent";

const ChangeLog = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-900 h-[250px]">
        <MiddleComponent heading="CHANGE LOG" para="API Changes & Updates" />
      </div>
    </div>
  );
};

export default ChangeLog;
