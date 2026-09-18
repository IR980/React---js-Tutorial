import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.img}
        alt="image"
      />
      <h1>{props.user}, {props.age}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,veniam!
      </p>
      <button>View Points</button>
    </div>
  );
};

export default Card;
