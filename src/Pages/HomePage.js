import React from "react";
import Header from "../components/Header";
import MiddleComponent from "../components/MiddleComponent";
import { MainContent } from "../components/MainContent";
function HomePage() {
  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div className="bg-gray-900 h-[430px]">
        <MiddleComponent
          heading="RANDOM USER GENERATOR"
          para="A free, open source API for generating random user data. Like Lorem Ipsum,but for people."
        />
      </div>
      <div>
        <MainContent />
      </div>
    </div>
  );
}

export default HomePage;
