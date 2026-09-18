import { Bookmark } from "lucide-react";
const Card = (props) => {
  console.log(props.company)
  console.log(props.posts);
  console.log(props.tag1);
  console.log(props.tag2);
  console.log(props.datePosted);
  console.log(props.pay);
  console.log(props.location);
  console.log(props.logo);
  console.log(props.id);
  return (
    <div className="card">
      <div className="top">
        <img
          src={props.logo}
          alt="image"
        />
        <button>
          Save <Bookmark size={15}/>
        </button>
      </div>

      <div className="center">
        <h3>
          {props.company} <span>{props.datePosted}</span>
        </h3>
        <h2>{props.posts}</h2>

        <div className="tag">
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
