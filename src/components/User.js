import React from "react";
import UserInfo from "./UserInfo";
import UserDesc from "./UserDesc";
import Container from 'react-bootstrap/Container';

const User = () => {
  return(
    <React.Fragment>
      <Container>
        <UserInfo/>
        <hr/>
        <UserDesc/>
      </Container>
    </React.Fragment>
  );
};

export default User;