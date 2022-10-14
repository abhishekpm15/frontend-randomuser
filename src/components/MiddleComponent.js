import React from "react";
const MiddleComponent = (props) => {
  return (
    <div>
        <div className="Heading text-4xl text-white pt-10 mb-5 w-full">
          {props.heading}
        </div>
        <p className="para text-xl text-white mb-3">{props.para}</p>
        <div className="flex justify-center">
          <svg
            class="w-6 h-6 mx-3 text-blue-300 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
          <div className="para2 text-sm my-1 text-gray-400">Follow us @randomapi</div>
        </div>
    </div>
  );
};

export default MiddleComponent;
