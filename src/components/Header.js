import React from "react";
import {AiOutlineHome,AiOutlineUser,AiOutlineHeart,AiOutlineCopyright} from "react-icons/ai"
import {FaPencilAlt} from "react-icons/fa"
import {ImStatsDots} from "react-icons/im"
import {DiPhotoshop} from "react-icons/di"
import {GrDocumentText} from "react-icons/gr"
import { Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-200 h-14">
        <div className="flex justify-center lg:flex-wrap">
          <div className="mx-6 my-1">
          <Link to="/HomePage">
          <AiOutlineHome className="text-2xl mx-auto "/>
          <div className="text-black">Home</div>
          </Link>
          </div>
          <div className="mx-6 my-1 ">
          <Link to="/UserPhotos">
          <AiOutlineUser className="text-2xl mx-auto"/>
          <div className="text-black">User Photos</div>
          </Link>
          </div>
          <div className="mx-6 my-1">
          <Link to="/Documentation">
          <GrDocumentText className="text-2xl mx-auto"/>
          <div className="text-black">Documentation</div>
          </Link>
          </div>
          <div className="mx-6 my-1">
          <Link to="/ChangeLog">
          <FaPencilAlt className="text-2xl mx-auto"/>
          <div className="text-black">Change Log</div>
          </Link>
          </div>
          <div className="mx-6 my-1"> 
          <Link to="/StatsGraphs">
          <ImStatsDots className="text-2xl mx-auto"/>
          <div className="text-black">Stats & Graphs</div>
          </Link>
          </div>
          <div className="mx-6 my-1">
          <Link to="/Donate">
          <AiOutlineHeart className="text-2xl mx-auto"/>
          <div className="text-black">Donate</div>
          </Link>
          </div>
          <div className="mx-6 my-1">
          <Link to="/Copyright">
          <AiOutlineCopyright className="text-2xl mx-auto"/>
          Copyright Notice
          </Link>
          </div>
          <div className="mx-6 my-1">
          <Link to="/Photoshop">
          <DiPhotoshop className="text-2xl mx-auto"/>
         Photoshop Extension
         </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;
