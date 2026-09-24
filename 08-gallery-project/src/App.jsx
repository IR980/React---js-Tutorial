import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";
const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const responce = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`,
    );
    // console.log(responce.data);
    setUserData(responce.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printDataUser = (
    <h2 className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h2>
  );
  if (userData.length > 0) {
    printDataUser = userData.map(function (elem, idx) {
      return <div key={idx}>
        <Card elem={elem}/>
      </div>;
    });
  }
  return (
    <div className="bg-black h-screen p-4 text-white overflow-auto">
      <h2 className="bg-amber-400 font-bold w-10 text-4xl text-black fixed">
        {index}
      </h2>
      {/* <button
        onClick={getData}
        className="bg-green-500 active:scale-95 mb-4 px-5 py-3 text-white rounded-xl p-3 m-6"
      >
        View Photos
      </button> */}

      <div className="flex flex-wrap gap-4">{printDataUser}</div>

      <div className="flex gap-5 justify-center items-center p-3">
        <button
          onClick={() => {
            // console.log("perv button pe click hua hai");
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className="bg-amber-500 text-gray cursor-pointer active:scale-95 font-semibold rounded px-4 py-1"
        >
          Prev
        </button>
        <h4>page {index}</h4>

        <button
          onClick={() => {
            // console.log("next button pe click hua hai");
            setUserData([]);
            setIndex(index + 1);
          }}
          className="bg-amber-500 text-gray cursor-pointer active:scale-95 font-semibold rounded px-4 py-1"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
