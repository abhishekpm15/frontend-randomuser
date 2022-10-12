import React from "react";
import Header from "../components/Header";
import MiddleComponent from "../components/MiddleComponent";

const UserPhotos = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-900 h-[250px]">
        <MiddleComponent
          heading="PROFILE PHOTOS"
          para="Don't want the data? Here's 200 friendly faces."
        />
      </div>
    </div>
  );
};

export default UserPhotos;
