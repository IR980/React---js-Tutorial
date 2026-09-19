import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute h-full w-full top-0 left-0 p-8 flex flex-col justify-between">
      <h2 className="bg-white rounded-full h-10 w-10 flex items-center justify-center text-2xl font-semibold">
        {props.id+1}
      </h2>
      <div>
        <p className="text-lg font-semibold leading-normal mb-10 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quo
          eveniet deserunt voluptatum illo debitis ullam doloremque quidem.
        </p>
        <div className="flex justify-between">
          <button style={{backgroundColor:props.color}} className="rounded-full text-white px-7 py-2 font-medium">
            {props.tag}
          </button>
          <button style={{backgroundColor:props.color}} className="rounded-full text-white px-3 py-1 font-medium">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
