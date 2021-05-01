import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.nameSection}>
        <FontAwesomeIcon
          icon={faStar}
          style={{ width: "28px", height: "25px" }}
          color="white"
        />
        <h1>Joseph Smith</h1>
      </div>
      <button>New Order</button>
    </div>
  );
};

export default Header;
