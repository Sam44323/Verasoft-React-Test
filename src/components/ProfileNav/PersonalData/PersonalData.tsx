import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faMobile,
  faBuilding,
  faHome,
  faAt,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./PersonalData.module.css";

const PersonalData: React.FC<{
  id: number;
  mob: string;
  work: string;
  home: string;
  email: string;
}> = (props) => {
  return (
    <div className={styles.personalDataContainer}>
      <div className={`${styles.userSection} ${styles.commonSectionStyles}`}>
        <FontAwesomeIcon
          icon={faUserAlt}
          color="#B0C6D8"
          className="common-user"
        />
        <p>#{props.id}</p>
      </div>
      <div className={`${styles.numberSection} ${styles.commonSectionStyles}`}>
        <FontAwesomeIcon icon={faMobile} color="#B0C6D8" />
        <p>{props.mob}</p>
      </div>
      <div
        className={`${styles.buildingSection} ${styles.commonSectionStyles}`}
      >
        <FontAwesomeIcon icon={faBuilding} color="#B0C6D8" />
        <p>{props.work} ext 1023</p>
      </div>
      <div className={`${styles.homeSection} ${styles.commonSectionStyles}`}>
        <FontAwesomeIcon icon={faHome} color="#B0C6D8" />
        <p>{props.home}</p>
      </div>
      <div className={`${styles.emailSection} ${styles.commonSectionStyles}`}>
        <FontAwesomeIcon icon={faAt} color="#B0C6D8" />
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default PersonalData;
