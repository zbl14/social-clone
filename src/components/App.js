import React from "react";
import NavBar from "./NavBar";
import User from "./User";
import PostList from "./PostList";
import AddFriend from "./AddFriend";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Container>
        <NavBar />
        <Row>
          <Col><User /></Col>
          <Col><PostList /></Col>
          <Col><AddFriend /></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
