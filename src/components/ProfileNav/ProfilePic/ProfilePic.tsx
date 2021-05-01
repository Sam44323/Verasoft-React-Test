import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "./ProfilePic.module.css";

const ProfilePic: React.FC = () => {
  return (
    <div className={styles.profilePicContainer}>
      <FontAwesomeIcon
        icon={faUser}
        style={{ width: "63px", height: "72px" }}
        color="#EDF5FF"
      />
      <p>MALE - 33</p>
    </div>
  );
};

export default ProfilePic;
