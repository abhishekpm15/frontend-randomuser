import React, { useContext, useState } from "react";
import Header from "../components/Header";
import { Context } from "../App";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import axios from "axios";
import { Alert } from "@material-tailwind/react";

const Create = () => {
  const datas = useContext(Context);
  const [val , setVal] = useState(null)
  const [val2 , setVal2] = useState(null)
  const [val3 , setVal3] = useState(null)
  const [val4 , setVal4] = useState(null)
  const [val5 , setVal5] = useState(null)
  const [val6 , setVal6] = useState(null)
  var [successresponse, setsuccessRespones] = useState(false);
  var [failresponse, setfailRespones] = useState(true);
  let fail = (
    <div className="w-full">
      <Alert color="red">No field should be empty !!</Alert>
    </div>
  );
  let success = (
    <div className="w-full">
      <Alert color="green">Field Updated Succesfully !!</Alert>
    </div>
  );


  const handleInput = () =>{
    setVal(document.getElementById("message").value);
  }
  const handleInput2 = () =>{
    setVal2(document.getElementById("message2").value);
  }
  const handleInput3 = () =>{
    setVal3(document.getElementById("message3").value);
  }
  const handleInput4 = () =>{
    setVal4(document.getElementById("message4").value);
  }
  const handleInput5 = () =>{
    setVal5(document.getElementById("message5").value);
  }
  const handleInput6 = () =>{
    setVal6(document.getElementById("message6").value);
  }
  const handleClick = () => {
    axios.post("https://snab-backend.herokuapp.com/post",{
      "address":val4,  
      "dob":val3,
      "email":val2,
      "password":val6,
      "image":"https://randomuser.me/api/portraits/men/61.jpg",
      "name":val,
      "phone":val5,
    }).then((response)=>{
        console.log(response);
        if( val === null || val2=== null || val3 === null || val4=== null || val5 === null || val6=== null){
          setfailRespones(false);
            console.log(failresponse);
            setTimeout(() => {
              setfailRespones({
                failresponse: false,
              });
            }, 2000);
        }
        else{
          setsuccessRespones(response.data.post);
          console.log(response);
        }
        
    },(error)=>{
      console.log(error);
    })
    console.log(val)
    console.log(val2)
    console.log(val3)
    console.log(val4)
    console.log(val5)
    console.log(val6)

  };

  return (
    <div className="bg-blue-gray-900 h-full">
      <div>
        <Header />
      </div>
      {successresponse ? <div>{success}</div> : <div></div>}
      {failresponse ? <div></div> : <div>{fail} </div>}

      <div className="flex justify-center mt-10">
        <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-[50%] ">
          <div className="mb-3 text-2xl"> Enter the Following Details</div>
          <div>
            <label
              className="block uppercase tracking-wide float-left ml-3 text-gray-700 text-xs font-bold mb-2"
            >
              Name
            </label>
            <div className="w-full p-2.5">
              <Input
                type="text"
                id="message"
                onInput={handleInput}
              />
            </div>
          </div>
          <div className="mt-3">
            <label
              className="block uppercase tracking-wide float-left ml-3 text-gray-700 text-xs font-bold mb-2"
            >
              Email
            </label>
            <div className="w-full p-2.5">
              <Input
                type="text"
                id="message2"
                onInput={handleInput2}
              />
            </div>
          </div>
          <div className="mt-3">
            <label
              className="block uppercase tracking-wide float-left ml-3 text-gray-700 text-xs font-bold mb-2"
            >
              Date of Birth (yyyy-mm-dd)
            </label>
            <div className="w-full p-2.5">
              <Input
                type="text"
                id="message3"
                onInput={handleInput3}
              />
            </div>
          </div>
          <div className="mt-3">
            <label
              className="block uppercase tracking-wide float-left ml-3 text-gray-700 text-xs font-bold mb-2"
            >
              Location
            </label>
            <div className="w-full p-2.5">
              <Input
                type="text"
                id="message4"
                onInput={handleInput4}
              />
            </div>
          </div>
          <div className="mt-3">
            <label
              className="block uppercase tracking-wide float-left ml-3 text-gray-700 text-xs font-bold mb-2"
            >
              Phone number
            </label>
            <div className="w-full p-2.5">
              <Input
                type="text"
                id="message5"
                onInput={handleInput5}
              />
            </div>
          </div>
          <div className="mt-3">
            <label
              className="block uppercase tracking-wide float-left ml-3 text-gray-700 text-xs font-bold mb-2"
            >
              Password
            </label>
            <div className="w-full p-2.5">
              <Input
                type="text"
                id="message6"
                onInput={handleInput6}
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleClick}
            >
              Update
            </Button>
          </div>
        </form>
      </div>{" "}
    </div>
  );
};

export default Create;
