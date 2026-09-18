import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent"> 
      <Card user="Zaid" age={25} img="https://images.unsplash.com/photo-1723296637578-95124ce6024b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Ali" age={30} img="https://images.unsplash.com/photo-1778648185557-f5e7d7a6c5d0?q=80&w=727&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Ahmed" age={35} img="https://images.unsplash.com/photo-1693237396552-91b5d6a9cd2a?q=80&w=797&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
    
  );
};

export default App;
