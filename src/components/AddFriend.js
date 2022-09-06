import React from "react";
import AddFriendFriendInfo from "./AddFriendFriendInfo";
import Container from 'react-bootstrap/Container';

const AddFriend = () => {
  return(
    <React.Fragment>
      <Container className="mt-5">
        <h5>Friend Suggestions:</h5>
        <AddFriendFriendInfo />
      </Container>
    </React.Fragment>
  )
};

export default AddFriend;


