import React from "react";
import "./App.css";

import UserData from "./containers/UserData/UserData";
import OrderContainer from "./containers/OrderContainer/OrderContainer";

function App() {
  return (
    <>
      <div className="container">
        <UserData />
        <OrderContainer />
      </div>
    </>
  );
}

export default App;
