import React from "react";
import { connect, useSelector } from "react-redux";
import { StateInterface, SummaryInterface } from "../../utils/interfaces";

import styles from "./UserData.module.css";

import ProfilePic from "../../components/ProfileNav/ProfilePic/ProfilePic";
import PersonalData from "../../components/ProfileNav/PersonalData/PersonalData";
import ComActivity from "../../components/ProfileNav/ComActivity/ComActivity";
import SMSCarrier from "../../components/ProfileNav/SMSCarrier/SMSCarrier";
import Header from "../../components/Header/Header";

const RootContainer: React.FC = () => {
  const summary = useSelector<StateInterface, SummaryInterface[]>(
    (state) => state.summary
  );
  return (
    <>
      <Header fName={summary[0].first_name} lName={summary[0].last_name} />
      <div className={styles.UserDataNavContainer}>
        <ProfilePic gender={summary[0].gender} />
        <PersonalData
          id={summary[0].id}
          mob={summary[0].mobile_phone}
          work={summary[0].work_phone}
          home={summary[0].home_phone}
          email={summary[0].email}
        />
        <ComActivity
          sms={summary[0].activity.sms}
          email={summary[0].activity.email}
          orders={summary[0].activity.orders}
        />
        <SMSCarrier
          data={new Date(summary[0].carrier_status.since)
            .toString()
            .split(" ")
            .slice(1, 4)}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state: StateInterface) => {
  return {
    value: state,
  };
};

export default connect(mapStateToProps, null)(RootContainer);
