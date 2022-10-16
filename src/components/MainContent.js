import {
  AiOutlinePhone,
  AiFillLock,
  AiOutlineMail,
  AiOutlineCalendar,
} from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { BsMap } from "react-icons/bs";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
export const MainContent = (props) => {
  let contentnew = null;
  const [isUserHovering, setIsUserHovering] = useState(true);
  const [isMailHovering, setIsMailHovering] = useState(false);
  const [isCalenderHovering, setIsCalenderHovering] = useState(false);
  const [isMapHovering, setIsMapHovering] = useState(false);
  const [isPhoneHovering, setIsPhoneHovering] = useState(false);
  const [isPassHovering, setIsPassHovering] = useState(false);

  const handleUser = () => {
    setIsMailHovering(false);
    setIsCalenderHovering(false);
    setIsMapHovering(false);
    setIsPhoneHovering(false);
    setIsPassHovering(false);
    setIsUserHovering(true);
  };

  const handleMail = () => {
    setIsUserHovering(false);
    setIsCalenderHovering(false);
    setIsMapHovering(false);
    setIsPhoneHovering(false);
    setIsPassHovering(false);
    setIsMailHovering(true);
  };

  const handleCalender = () => {
    setIsMailHovering(false);
    setIsUserHovering(false);
    setIsMapHovering(false);
    setIsPhoneHovering(false);
    setIsPassHovering(false);
    setIsCalenderHovering(true);
  };

  const handleMap = () => {
    setIsMailHovering(false);
    setIsCalenderHovering(false);
    setIsUserHovering(false);
    setIsPhoneHovering(false);
    setIsPassHovering(false);
    setIsMapHovering(true);
  };

  const handlePhone = () => {
    setIsMailHovering(false);
    setIsCalenderHovering(false);
    setIsMapHovering(false);
    setIsUserHovering(false);
    setIsPassHovering(false);
    setIsPhoneHovering(true);
  };

  const handlePass = () => {
    setIsMailHovering(false);
    setIsCalenderHovering(false);
    setIsMapHovering(false);
    setIsPhoneHovering(false);
    setIsUserHovering(false);
    setIsPassHovering(true);
  };

  if (isUserHovering) {
    contentnew = (
      <div className="Title text-xl text-gray-500"> Hi, My name is</div>
    );
  } else if (isMailHovering) {
    contentnew = (
      <div className="Title text-xl text-gray-500"> My email address is</div>
    );
  } else if (isCalenderHovering) {
    contentnew = (
      <div className="Title text-xl text-gray-500"> My birthdate is</div>
    );
  } else if (isMapHovering) {
    contentnew = (
      <div className="Title text-xl text-gray-500"> My address is</div>
    );
  } else if (isPhoneHovering) {
    contentnew = (
      <div className="Title text-xl text-gray-500"> My phone number is</div>
    );
  } else if (isPassHovering) {
    contentnew = (
      <div className="Title text-xl text-gray-500"> My password is</div>
    );
  }

  let navigate = useNavigate();

  return (
    <div className="bg-white -my-52 mx-[20%] -mx[20%]">
      <div className="h-32 bg-gray-300">
        <img src={props.image} className="rounded-full w-40 mx-[41%]" />
      </div>
      <div className="mt-16">
        <div className="h-10">{contentnew}</div>
        <div className="h-10 font-bold">
          {isUserHovering && <div className="Name text-4xl">{props.name}</div>}
          {isMailHovering && <div className="Name text-4xl">{props.email}</div>}
          {isCalenderHovering && (
            <div className="Name text-4xl">{props.age}</div>
          )}
          {isMapHovering && (
            <div className="Name text-4xl">{props.location}</div>
          )}
          {isPhoneHovering && (
            <div className="Name text-4xl">{props.number}</div>
          )}
          {isPassHovering && (
            <div className="Name text-4xl">{props.password}</div>
          )}
        </div>
      </div>
      <div className="details-icon mt-6 flex absolute mx-[11%]">
        <div className="mx-8 h-11 w-auto" onMouseOver={handleUser}>
          {" "}
            {" "}
            <FiUser className="w-9 h-9 transition ease-in-out delay-75 hover:-translate-y-3 hover:scale-125 duration-300 hover:text-blue-500 " />
        </div>
        <div className="mx-8 h-11 w-auto" onMouseOver={handleMail}>
          {" "}
            {" "}
            <AiOutlineMail className="w-9 h-9 transition ease-in-out delay-75 hover:-translate-y-3 hover:scale-125 duration-300 hover:text-blue-500 " />
        </div>
        <div className="mx-8  h-11 w-auto" onMouseOver={handleCalender}>
            {" "}
            <AiOutlineCalendar className="w-9 h-9 transition ease-in-out delay-75 hover:-translate-y-3 hover:scale-125 duration-300 hover:text-blue-500 " />
        </div>
        <div className="mx-8 h-11 w-auto" onMouseOver={handleMap}>
            {" "}
            <BsMap className="w-9 h-9 transition ease-in-out delay-75 hover:-translate-y-3 hover:scale-125 duration-300 hover:text-blue-500 " />
        </div>
        <div className="mx-8 h-11 w-auto" onMouseOver={handlePhone}>
            {" "}
            <AiOutlinePhone className="w-9 h-9 transition ease-in-out delay-75 hover:-translate-y-3 hover:scale-125 duration-300 hover:text-blue-500 " />
        </div>
        <div className="mx-8 h-11 w-auto " onMouseOver={handlePass}>
            {" "}
            <AiFillLock className="w-9 h-9 transition ease-in-out delay-75 hover:-translate-y-3 hover:scale-125 duration-300 hover:text-blue-500 " />
        </div>
      </div>
      <div className="mt-[11%]">
        <Button
          className="mx-5"
          onClick={() => {
            navigate("/Create");
          }}
        >
          {" "}
          Create{" "}
        </Button>

        <Button
          className="mx-5"
          onClick={() => {
            navigate("/Update");
          }}
        >
          {" "}
          Update{" "}
        </Button>

        <Button
          className="mx-5"
          onClick={() => {
            navigate("/Delete");
          }}
        >
          {" "}
          Delete{" "}
        </Button>
        <Button
          className="mx-5"
          onClick={() => {
            navigate("/Search");
          }}
        >
          {" "}
          Search{" "}
        </Button>
      </div>
    </div>
  );
};
