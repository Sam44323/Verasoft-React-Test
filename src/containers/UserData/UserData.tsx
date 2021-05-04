import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StateInterface } from "../../utils/interfaces";
import * as actionCreators from "../../store/actions/actionCreator";

import styles from "./UserData.module.css";

import ProfilePic from "../../components/ProfileNav/ProfilePic/ProfilePic";
import PersonalData from "../../components/ProfileNav/PersonalData/PersonalData";
import ComActivity from "../../components/ProfileNav/ComActivity/ComActivity";
import SMSCarrier from "../../components/ProfileNav/SMSCarrier/SMSCarrier";
import Header from "../../components/Header/Header";
import Modal from "../../UI-Components/Modal/Modal";

const RootContainer: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector<StateInterface, StateInterface>((state) => state);
  const { summary, loading } = state;

  useEffect(() => {
    dispatch(actionCreators.fetchUserSummaryStart());
  }, [dispatch]);
  return (
    <>
      {loading ? <Modal /> : null}
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
