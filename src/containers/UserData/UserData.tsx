import React from "react";
import { useSelector } from "react-redux";
import { StateInterface, SummaryInterface } from "../../utils/interfaces";

import styles from "./UserData.module.css";

import ProfilePic from "../../components/ProfileNav/ProfilePic/ProfilePic";
import PersonalData from "../../components/ProfileNav/PersonalData/PersonalData";
import ComActivity from "../../components/ProfileNav/ComActivity/ComActivity";
import SMSCarrier from "../../components/ProfileNav/SMSCarrier/SMSCarrier";
import Header from "../../components/Header/Header";

const RootContainer: React.FC = () => {
  const summary = useSelector<StateInterface, SummaryInterface>(
    (state) => state.summary
  );
  return (
    <>
      <Header fName={summary.first_name} lName={summary.last_name} />
      <div className={styles.UserDataNavContainer}>
        <ProfilePic gender={summary.gender} />
        <PersonalData
          id={summary.id}
          mob={summary.mobile_phone}
          work={summary.work_phone}
          home={summary.home_phone}
          email={summary.email}
        />
        <ComActivity
          sms={summary.activity.sms}
          email={summary.activity.email}
          orders={summary.activity.orders}
        />
        <SMSCarrier
          data={new Date(summary.carrier_status.since)
            .toString()
            .split(" ")
            .slice(1, 4)}
        />
      </div>
    </>
  );
};

export default RootContainer;
