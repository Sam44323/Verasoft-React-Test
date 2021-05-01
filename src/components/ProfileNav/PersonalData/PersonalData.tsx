import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMobile,
  faBuilding,
  faHome,
  faAt,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./PersonalData.module.css";

const PersonalData: React.FC = () => {
  return (
    <div className={styles.personalDataContainer}>
      <div className={`${styles.userSection} ${styles.commonSectionStyles}`}>
        <FontAwesomeIcon icon={faUser} color="#B0C6D8" />
        <p>#12345678</p>
      </div>
      <div className={`${styles.numberSection} ${styles.commonSectionStyles}`}>
        <FontAwesomeIcon icon={faMobile} color="#B0C6D8" />
        <p>248-555-1000</p>
      </div>
      <div
        className={`${styles.buildingSection} ${styles.commonSectionStyles}`}
      >
        <FontAwesomeIcon icon={faBuilding} color="#B0C6D8" />
        <p>248-555-1000 ext 1023</p>
      </div>
      <div className={`${styles.homeSection} ${styles.commonSectionStyles}`}>
        <FontAwesomeIcon icon={faHome} color="#B0C6D8" />
        <p>248-555-1000</p>
      </div>
      <div className={`${styles.emailSection} ${styles.commonSectionStyles}`}>
        <FontAwesomeIcon icon={faAt} color="#B0C6D8" />
        <p>joe.smith@testemail.com</p>
      </div>
    </div>
  );
};

export default PersonalData;
