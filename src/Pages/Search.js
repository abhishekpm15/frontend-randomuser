import React, { useState, useContext } from "react";
import Header from "../components/Header";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Context } from "../App";
import axios from "axios";
import { Alert } from "@material-tailwind/react";
const Search = () => {
  const datas = useContext(Context);
  const [uuid, setUudi] = useState(null);

  var [val, setVal] = useState(null);
  var [val2, setVal2] = useState(null);
  const [actualData , setactualData] = useState(null);
  var [successresponse, setsuccessRespones] = useState(false);
  var [failresponse, setfailRespones] = useState(true);

  const handleClick2 = () => {
    setVal(document.getElementById("message").value);
    setUudi(datas.uuid);
  };

  const handleClick3 = () => {
    setVal2(document.getElementById("message2").value);
  };
  let uf = "";
  if (val2 === "Name") {
    uf = "name";
  } else if (val2 === "Email") {
    uf = "email";
  } else if (val2 === "Date of Birth") {
    uf = "dob";
  } else if (val2 === "Location") {
    uf = "address";
  } else if (val2 === "Phone number") {
    uf = "phone";
  } else if (val2 === "Password") {
    uf = "password";
  }

  let success = (
    <div className="w-full">
      <Alert color="green">Search Sucessful !!</Alert>
    </div>
  );

  let fail = (
    <div className="w-full">
      <Alert color="red">Search Unsucessful !!</Alert>
    </div>
  );

  const handleClick = () => {
    axios
      .post("https://snab-backend.herokuapp.com/search", {
        [uf]: val,
      })
      .then((response) => {
        console.log(response);
        if (val == null) {
          setfailRespones(false);
          console.log(failresponse);
          setTimeout(() => {
            setfailRespones({
              failresponse: false,
            });
          }, 2000);
        } else if (response.status === 200) {
            setactualData(response.data);
          setsuccessRespones(true);
        }
      });
  };

  return (
    <div className="bg-blue-gray-900 h-full">
      <div>
        <Header />
      </div>
      {successresponse ? <div>{success}</div> : <div></div>}
      {failresponse ? <div></div> : <div>{fail} </div>}
      <div className="flex mt-14 justify-center">
        <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-96">
          <div className="mb-7 text-xl font-bold "> Choose field to Search</div>
          <div className="mb-4">
            <select
              className="w-full p-2.5 text-black bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="message2"
              onChange={handleClick3}
            >
              <option>Choose any field</option>
              <option>Name</option>
              <option>Email</option>
              <option>Date of Birth </option>
              <option>Location </option>
              <option>Phone number</option>
              <option>Password</option>
            </select>
          </div>
          <div>
            Enter Value to Search
            <div className="w-full p-2.5">
              <Input
                type="text"
                id="message"
                name="message"
                onInput={handleClick2}
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleClick}
            >
              Search
            </Button>
          </div>
        </form>
        {successresponse ?(
        <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-96 ml-40">
          <div className="text-xl font-bold mb-7">
            Information about the person
          </div>
          <div className="flex-col float-left">
          <div className="mb-2">Name : {actualData.name}</div>
          <br></br>
          <div className="mb-2">Date of Birth : {actualData.dob}</div>
          <br></br>
          <div className="mb-2">Email : {actualData.email}</div>
          <br></br>
          <div className="mb-2">Location : {actualData.address}</div>
          <br></br>
          <div className="mb-2">Phone number : {actualData.phone}</div>
          <br></br>
          <div className="mb-2  ">Password : {actualData.password}</div>
          </div>
        </form>
        ) : <div></div>}
      </div>
    </div>
  );
};

export default Search;
