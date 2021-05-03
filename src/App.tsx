import React from "react";
import "./App.css";

import UserData from "./containers/UserData/UserData";
import OrderContainer from "./containers/OrderContainer/OrderContainer";
import Modal from "./UI-Components/Modal/Modal";

function App() {
  return (
    <>
      <UserData />
      <OrderContainer />
      {/* <Modal /> */}
    </>
  );
}

export default App;
