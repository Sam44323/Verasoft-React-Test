import React from "react";

import ProfilePic from "../../components/ProfileNav/ProfilePic/ProfilePic";
import PersonalData from "../../components/ProfileNav/PersonalData/PersonalData";
import ComActivity from "../../components/ProfileNav/ComActivity/ComActivity";
import SMSCarrier from "../../components/ProfileNav/SMSCarrier/SMSCarrier";

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
      <ProfilePic />
      <PersonalData />
      <ComActivity />
      <SMSCarrier />
    </>
  );
};

export default RootContainer;
