import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PostListUserStatus = () => {
  return(
    <Container fluid>
      <form>
        <Row>
          <Col md={7}><input type="text" placeholder="What's Happening?" /></Col> 
          <Col md={2}><Button className="btn btn-outline-success" variant="light" size="sm" href="#">Submit</Button></Col>
        </Row>
      </form>
    </Container>
  );
};

export default PostListUserStatus;