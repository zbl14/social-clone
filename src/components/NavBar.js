import React from "react";
// import NavBarButton from "./NavBarButton";
// import NavBarSearch from "./NavBarSearch";
// import NavBarTweet from "./NavBarTweet";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <Navbar bg="light" expand="xxl">
      <Container fluid>
        <Navbar.Brand href="#">SocialFriends</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Notifications" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Notification 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Notification 2</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Notification 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Messages" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action6">Message 1</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Message 2</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Message 3</NavDropdown.Item>
            </NavDropdown>
        
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Button variant="outline-success">Tweet</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;




// const NavBar = () => {
//   return(
//     <React.Fragment>
//       <NavBarButton />
//       <NavBarSearch />
//       <NavBarTweet />
//     </React.Fragment>
//   )
// };

// export default NavBar;