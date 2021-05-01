import React from "react";

import styles from "./Profile.module.css";

import ProfilePic from "./ProfilePic/ProfilePic";
import PersonData from "./PersonalData/PersonalData";
import ComActivity from "./ComActivity/ComActivity";
import SMSCarrier from "./SMSCarrier/SMSCarrier";

const ProfileNav: React.FC = () => {
  return (
    <div className={styles.profileNavContainer}>
      <ProfilePic />
      <PersonData />
      <ComActivity />
      <SMSCarrier />
    </div>
  );
};

export default ProfileNav;
