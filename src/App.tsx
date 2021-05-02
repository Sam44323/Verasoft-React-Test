import React from "react";
import "./App.css";

import UserData from "./containers/UserData/UserData";
import OrderContainer from "./containers/OrderContainer/OrderContainer";

function App() {
  return (
    <>
      <UserData />
      <OrderContainer />
    </>
  );
}

export default App;
