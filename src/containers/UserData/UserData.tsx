import React from "react";

import ProfilePic from "../../components/ProfileNav/ProfilePic/ProfilePic";
import PersonalData from "../../components/ProfileNav/PersonalData/PersonalData";
import ComActivity from "../../components/ProfileNav/ComActivity/ComActivity";
import SMSCarrier from "../../components/ProfileNav/SMSCarrier/SMSCarrier";
import Header from "../../components/Header/Header";

const SUMMARY = {
  id: 12345678,
  first_name: "Joseph",
  last_name: "Smith",
  photo_url: null,
  gender: "male",
  birth_date: "1975-06-18",
  home_phone: "248-555-1000",
  mobile_phone: "248-555-3000",
  work_phone: "248-555-2000",
  email: "joe.smith@testemail.com",
  activity: {
    sms: 6,
    email: 4,
    orders: 1,
  },
  carrier_status: {
    since: "2006-06-02T21:00:00.000Z",
    status: "IN",
  },
};

const RootContainer: React.FC = () => {
  return (
    <>
      <Header fName={SUMMARY.first_name} lName={SUMMARY.last_name} />
      <ProfilePic gender={SUMMARY.gender} />
      <PersonalData
        id={SUMMARY.id}
        mob={SUMMARY.mobile_phone}
        work={SUMMARY.work_phone}
        home={SUMMARY.home_phone}
        email={SUMMARY.email}
      />
      <ComActivity />
      <SMSCarrier />
    </>
  );
};

export default RootContainer;
