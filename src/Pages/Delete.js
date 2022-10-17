import React, { useContext, useState } from "react";
import Header from "../components/Header";
import { Context } from "../App";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import { Alert } from "@material-tailwind/react";
const Delete = () => {
  const datas2 = useContext(Context);
  var [successresponse, setsuccessRespones] = useState(false);
  let success = (
    <div className="w-full">
      <Alert color="green">Deleted Sucessfully!!</Alert>
    </div>
  );
  const handleClick = () => {

    console.log(datas2.name);
    console.log(datas2.uuid)
    axios.post("https://snab-backend.herokuapp.com/delete",{
      "uuid": datas2.uuid
    }).then((response)=>{
      console.log(response)
      if(response.status === 200){
        setsuccessRespones(true);
      }
    },(error)=>{
      console.log(error);
    })
  };
  return (
    <div className="bg-blue-gray-900 h-full">
      <div>
        <Header />
        {successresponse ? <div>{success}</div> : <div></div>}
        <div className="text-2xl mt-10 text-white"> Are you sure , you want to delete this user ?</div>
        <div className="mt-10">
          <Button  onClick={handleClick} >Delete User</Button>
        </div>
      </div>
      <div className="flex justify-center mt-36"></div>
    </div>
  );
};

export default Delete;
