import {
  AiOutlinePhone,
  AiFillLock,
  AiOutlineMail,
  AiOutlineCalendar,
} from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { BsMap } from "react-icons/bs";
import { useState } from "react";
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
  // const handleUserOff = () =>{
  //   setIsUserHovering(false)
  // }
  const handleMail = () => {
    setIsUserHovering(false);
    setIsCalenderHovering(false);
    setIsMapHovering(false);
    setIsPhoneHovering(false);
    setIsPassHovering(false);
    setIsMailHovering(true);
  };
  // const handleMailOff = () => {
  //   setIsMailHovering(false);
  // };
  const handleCalender = () => {
    setIsMailHovering(false);
    setIsUserHovering(false);
    setIsMapHovering(false);
    setIsPhoneHovering(false);
    setIsPassHovering(false);
    setIsCalenderHovering(true);
  };
  // const handleCalenderOff = () => {
  //   setIsCalenderHovering(false);
  // };
  const handleMap = () => {
    setIsMailHovering(false);
    setIsCalenderHovering(false);
    setIsUserHovering(false);
    setIsPhoneHovering(false);
    setIsPassHovering(false);
    setIsMapHovering(true);
  };
  // const handleMapOff = () => {
  //   setIsMapHovering(false);
  // };
  const handlePhone = () => {
    setIsMailHovering(false);
    setIsCalenderHovering(false);
    setIsMapHovering(false);
    setIsUserHovering(false);
    setIsPassHovering(false);
    setIsPhoneHovering(true);
  };
  // const handlePhoneOff = () => {
  //   setIsPhoneHovering(false);
  // };
  const handlePass = () => {
    setIsMailHovering(false);
    setIsCalenderHovering(false);
    setIsMapHovering(false);
    setIsPhoneHovering(false);
    setIsUserHovering(false);
    setIsPassHovering(true);
  };
  // const handlePassOff = () => {
  //   setIsPassHovering(false);
  // };

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

  return (
    <div className="bg-white -my-52 mx-[20%] -mx[20%]">
      <div className="h-32 bg-gray-200"></div>
      <img src={props.image} className="rounded-full -my-5" />
      <div>
        <div className="h-10">{contentnew}</div>
        <div className="h-10">
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
      <div className="details-icon flex justify-center mt-10 ">
        <div
          className="mx-3 hover:text-blue-600"
          onMouseOver={handleUser}
          // onMouseOut={handleUserOff}
        >
          {" "}
          <a href="">
            {" "}
            <FiUser className="w-9 h-9" />
          </a>
        </div>
        <div
          className="mx-3 hover:text-blue-600"
          onMouseOver={handleMail}
          // onMouseOut={handleMailOff}
        >
          {" "}
          <a href="">
            {" "}
            <AiOutlineMail className="w-9 h-9 mx-5" />
          </a>
        </div>
        <div
          className="mx-3 hover:text-blue-600"
          onMouseOver={handleCalender}
          // onMouseOut={handleCalenderOff}
        >
          <a href="">
            {" "}
            <AiOutlineCalendar className="w-9 h-9 mx-5" />
          </a>
        </div>
        <div
          className="mx-3 hover:text-blue-600"
          onMouseOver={handleMap}
          // onMouseOut={handleMapOff}
        >
          <a href="">
            {" "}
            <BsMap className="w-9 h-9 mx-5" />
          </a>
        </div>
        <div
          className="mx-3 hover:text-blue-600"
          onMouseOver={handlePhone}
          // onMouseOut={handlePhoneOff}
        >
          <a href="">
            {" "}
            <AiOutlinePhone className="w-9 h-9 mx-5" />
          </a>
        </div>
        <div
          className="mx-3 hover:text-blue-600"
          onMouseOver={handlePass}
          // onMouseOut={handlePassOff}
        >
          <a href="">
            {" "}
            <AiFillLock className="w-9 h-9 mx-5" />
          </a>
        </div>
      </div>
    </div>
  );
};
