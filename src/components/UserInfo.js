import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const UserInfo = () => {
  return(
    <React.Fragment>
      <br/>
      <img src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&quality=45&fit=max&dpr=2&s=ab46a8887cfbbb1068020c58ce592306" alt="user" width = "200 px"/>
      <h1>Tom KatChat</h1>
      <br/>
      <ButtonGroup>
        <Button className="btn btn-outline-success" variant="light"  href="#">Tweets: 25</Button>
        <Button className="btn btn-outline-success" variant="light" href="#">Following: 10</Button>
        <Button className="btn btn-outline-success" variant="light" href="#">Followers: 2</Button>
      </ButtonGroup>
    </React.Fragment>
  );
};

export default UserInfo;
