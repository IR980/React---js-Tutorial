import React from "react";

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
        <div className="h-45 w-44 overflow-auto rounded-xl">
          <img
            className="h-full w-full object-cover"
            src={props.elem.download_url}
            alt="image"
          />
        </div>
        <h2 className="text-lg font-bold">{props.elem.author}</h2>
      </a>
    </div>
  );
};

export default Card;
