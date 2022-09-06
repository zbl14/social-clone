import React from "react";
import UserInfo from "./UserInfo";
import UserDesc from "./UserDesc";

const User = () => {
  return(
    <React.Fragment>
      <UserInfo/>
      <UserDesc/>
    </React.Fragment>
  );
};

export default User;