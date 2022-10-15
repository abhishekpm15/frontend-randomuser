import React, { useState } from "react";
import Header from "../components/Header";
import { Button } from "@material-tailwind/react";
const Update = () => {
  const [value, setValue] = useState();
  let passVar=null;


  return (
    <div className="bg-blue-gray-900 h-full">
      <div>
        <Header />
      </div>
      <div className="flex justify-center mt-36">
        <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-96">
          <div className="mb-4">
            <select
              className="w-full p-2.5 text-black bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              onChange={(e) => setValue(e.target.value)}
            >
              <option>Choose field to Update</option>
              <option>Name</option>
              <option>Email</option>
              <option>Date of Birth </option>
              <option>Location </option>
              <option>Phone number</option>
              <option>Password</option>
            </select>
          </div>

          <div className="flex justify-center">
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Update
            </Button>
          </div>
        </form>
      </div>
      <div>{console.log(value)}</div>
    </div>
  );
};

export default Update;
