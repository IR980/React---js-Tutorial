import React, { useEffect, useState } from 'react'

const App = () => {
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(10);

  function v1Changing(){
    console.log("v1 ki value change ho gai")
  }

  function v2Changing(){
    console.log("v2 ki value change ho gai")
  }

  useEffect(function(){
    v1Changing();
  }, [v1])

  useEffect(function(){
    v2Changing();
  }, [v2])
  
  return (
    <div>
      <h1>value is v1 is {v1}</h1>
      <h2>value of v2 is {v2}</h2>
      <button onClick={(function(){
        setV1(v1+1);
      })}>Button-1</button>
      <button onClick={(function(){
        setV2(v2+1)
      })}>Button-2</button>
    </div>
  )
}

export default App