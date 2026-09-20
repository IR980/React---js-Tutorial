import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0);
  function increased(){
    console.log("incresing");
    setNum(num+1)
  }
  function decreased(){
    console.log("decreasing");
    setNum(num-1);
  }

  function increasedNum(){
    console.log("increasing by 5");
    setNum(num+5);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increased} >increase</button>
      <button onClick={decreased}>decrease</button>
      <button onClick={increasedNum}>increased by 5</button>
    </div>
  )
}

export default App