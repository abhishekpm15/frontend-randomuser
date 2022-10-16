import React, { useState,useContext } from "react";
import Header from "../components/Header";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Context } from "../App";
import axios from "axios";
import { Alert } from "@material-tailwind/react";
const Update = (props) => {
  const datas = useContext(Context)
  const [uuid,setUudi] = useState(null);
 
  
 var [val, setVal] = useState(null)
 var [val2,setVal2] = useState(null)
  var [successresponse , setsuccessRespones] = useState(false);
  var [failresponse , setfailRespones] = useState(true);

  const handleClick2 = (e) =>{
    setVal(document.getElementById("message").value);
    setUudi(datas.uuid);
  }

  const handleClick3 = (e)=>{
    setVal2(document.getElementById("message2").value);
  }
  let uf="";
  if(val2 === 'Name'){
    uf="name";
  }
  else if(val2=== 'Email'){
    uf='email'
  }
  else if(val2==='Date of Birth'){
    uf='dob';
  }
  else if(val2==='Location'){
    uf='address'
  }
  else if(val2==='Phone number'){
    uf='phone'
  }
  else if(val2==='Password'){
    uf='password'
  }

  let success = (
    <div className="w-full">
    <Alert color="green">Field Updated Succesfully !!</  Alert>
    </div>
    );

  let fail = (
    <div className="w-full">
    <Alert color="red">Update unsucessful !!</  Alert>
    </div>
  )

  const handleClick =()=>{  
      console.log(uuid)
      console.log(val);
      console.log(val2)
      console.log(uf);

      axios.patch("https://snab-backend.herokuapp.com/patch",{
          "uuid" : uuid,
           [uf]: val
      }).then((response)=>{
        if(response.data.patch === true){
          setsuccessRespones(response.data.patch);          
        }}
      ,(error)=>{
        if(error.response.status === 500)
        setfailRespones(false)
        console.log(failresponse)
        setTimeout(() => {
          setfailRespones({
              failresponse: false
          })
       }, 2000)
      })
  }


  return (
    <div className="bg-blue-gray-900 h-full">
      <div>
        <Header />
      </div>
      { successresponse ? <div>{success}</div> : <div></div>}
      {failresponse ? <div></div> : <div>{fail} </div>  }
      <div className="flex justify-center mt-36">
        
        <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-96 ">
          <div className="mb-3"> Choose field to Update</div>
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
            Enter Value to Update
            <div className="w-full p-2.5">
              <Input type="text" id="message" name="message" onInput={handleClick2}/>
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
      </div>
    </div>
  );
};

export default Update;
