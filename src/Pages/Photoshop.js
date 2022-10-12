import React from "react";
import Header from "../components/Header";
import MiddleComponent from "../components/MiddleComponent";

const Photoshop = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-900 h-[250px]">
        <MiddleComponent
          heading="PHOTOSHOP EXTENSION"
          para="Free Photoshop extension. Easily drag and drop random users into your PSDs"
        />
      </div>
    </div>
  );
};

export default Photoshop;
