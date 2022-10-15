import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MiddleComponent from "../components/MiddleComponent";
import { MainContent } from "../components/MainContent";
import axios from "axios";
function HomePage() {
  const url = "https://snab-app.herokuapp.com/get";
  const [datas, setDatas] = useState(null);
  let content1 = null;
  let content2 = null;
  let content3 = null;
  let content4 = null;
  let content5 = null;
  let content6 = null;
  let content7 = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setDatas(response.data);
    });
  }, [url]);

  if (datas) {
    console.log(datas);
    content1 = (
      <div className="text-2xl flex justify-center">
        <div className="mx-1">{datas.name}.</div>
      </div>
    );

    content2 = <div className="text-2xl">{datas.email}</div>;

    content3 = <div className="text-2xl">{datas.dob}</div>;

    content4 = (
      <div className="text-2xl flex justify-center">
        <div className="mx-2">{datas.address}</div>
      </div>
    );

    content5 = <div className="text-3xl">{datas.phone}</div>;

    content6 = (
      <div className="text-4xl">{datas.password}</div>
    );

    content7 = datas.image;
  }
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
        <MainContent
          name={content1}
          email={content2}
          age={content3}
          location={content4}
          number={content5}
          password={content6}
          image={content7}
        />
      </div>
    </div>
  );
}

export default HomePage;
