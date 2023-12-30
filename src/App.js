import React, { useState } from "react";

import Tours from "./components/Tours";
import data from "./data"
const App = () => {
  const [tours,setTours]=useState(data);
  function removeTour(id){
    const newTour= tours.filter(tour=> tour.id!=id );
    setTours(newTour);
  }
  function refreshHandler(){
    setTours(data);
  }
  if(tours.length===0){
    return(
      <div>
        <h1> No Tour Left</h1>
        <button onClick={refreshHandler}>Refresh</button>
      </div>
    );
  }
  return (
    <div className="container">
      <Tours tour={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
