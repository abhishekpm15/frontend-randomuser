// import ReactRoundedImage from "react-rounded-image";
// import Photo from "../images/user.jpeg";
export const MainContent = (props) => {

  return (
    <div className="bg-white h-[400px] w-[770px] -my-52 mx-[390px] border-b-4">
      <div>
        <div className="h-32 bg-gray-200"></div>
        <div className="-my-[100px] mx-72">
          <img src={props.image} className="rounded-full"/>
        </div>
      </div>
      <div>
        <div className="Title mt-32 mb-2 text-xl text-gray-500">
          Hi, My name is
        </div>
        <div className="Name text-4xl">{props.name}</div>
        <div className="Name text-4xl">{props.email}</div>
        <div className="Name text-4xl">{props.age}</div>
        <div className="Name text-4xl">{props.location}</div>
        <div className="Name text-4xl">{props.number}</div>
        <div className="Name text-4xl">{props.password}</div>
      </div>
      
      <div className="scrollicons">
      </div>
    </div>
  );
};
