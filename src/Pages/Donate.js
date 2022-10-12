import React from "react";
import Header from "../components/Header";
import MiddleComponent from "../components/MiddleComponent";

const Donate = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-900 h-[250px]">
        <MiddleComponent
          heading="DONATE"
          para="Help keep our API free by donating !"
        />
      </div>
    </div>
  );
};

export default Donate;
