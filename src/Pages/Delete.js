import React, { useContext } from "react";
import Header from "../components/Header";
import { Context } from "../App";
import axios from "axios";
import { Button } from "@material-tailwind/react";
const Delete = () => {
  const datas = useContext(Context);
  const handleClick = () => {

    console.log(datas.name);
    console.log(datas.uuid);
  //   axios.delete("https://snab-backend.herokuapp.com/drop",{
  //     "uuid": datas.uuid
  //   }).then((response)=>{
  //     console.log(response)
  //   },(error)=>{
  //     console.log(error);
  //   })
  };
  return (
    <div className="bg-blue-gray-900 h-full">
      <div>
        <Header />
        <div className="mt-16">
          <Button onClick={handleClick}>Delete User</Button>
        </div>
      </div>
      <div className="flex justify-center mt-36"></div>
    </div>
  );
};

export default Delete;
