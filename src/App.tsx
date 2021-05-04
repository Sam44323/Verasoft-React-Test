import React from "react";
import "./App.css";

import UserData from "./containers/UserData/UserData";
import OrderContainer from "./containers/OrderContainer/OrderContainer";
import Modal from "./UI-Components/Modal/Modal";

function App() {
  return (
    <>
      <Modal />
      <div className="container">
        <UserData />
        <OrderContainer />
      </div>
    </>
  );
}

export default App;
