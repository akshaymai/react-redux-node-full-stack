import React from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import {Container, Nav,Navbar} from 'react-bootstrap'
const Header = (props) =>{

    return  (
        <div>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
<Container>
  <LinkContainer to="/">
  <Navbar.Brand  >Photo-Shop</Navbar.Brand>
  </LinkContainer>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <LinkContainer to='/cart'>
      <Nav.Link ><i className="fa fa-shopping-cart" ></i> Cart</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/signin">
      <Nav.Link ><i className="fa fa-user" ></i> SignIn</Nav.Link>
      </LinkContainer>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
}
export default Header;