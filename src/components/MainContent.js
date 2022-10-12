import ReactRoundedImage from "react-rounded-image";
import Photo from "../images/user.jpeg";
export const MainContent = () => {

  return (
    <div className="bg-white h-[400px] w-[770px] -my-52 mx-[390px] border-b-4">
      <div>
        <div className="h-32 bg-gray-200"></div>
        <div className="-my-[100px] mx-72">
          <ReactRoundedImage
            image={Photo}
            imageHeight="150"
            imageWidth="150"
            roundedColor="#EDE4E3"
            roundedSize="13"
            hoverColor="#DD1144"
          />
        </div>
      </div>
      <div>
        <div className="Title mt-32 mb-2 text-xl text-gray-500">
          Hi, My name is
        </div>
        <div className="Name text-4xl">Abhishek P.M</div>
      </div>
      <div className="scrollicons">
      </div>
    </div>
  );
};
