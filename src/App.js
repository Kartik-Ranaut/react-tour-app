import React, { useState } from "react";

import Tours from "./components/Tours";
import data from "./data"
const App = () => {
  const [tours,setTours]=useState(data);
  return (
    <div>
      <Tours tour={tours}></Tours>
    </div>
  );
};

export default App;
