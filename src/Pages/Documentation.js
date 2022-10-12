import React from "react";
import Header from "../components/Header";
import MiddleComponent from "../components/MiddleComponent";

const Documentation = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-900 h-[250px]">
        <MiddleComponent
          heading="DOCUMENTATION"
          para="Documentation for the Random User Generator API"
        />
      </div>
    </div>
  );
};

export default Documentation;
