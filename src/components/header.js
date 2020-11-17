import React from 'react';
import {Container, Nav,Navbar} from 'react-bootstrap'
const Header = (props) =>{

    return  (
        <div>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
<Container>
  <Navbar.Brand href="/">Photo-Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/cart" ><i className="fa fa-shopping-cart" ></i> Cart</Nav.Link>
      <Nav.Link href="/sing in"><i className="fa fa-user" ></i> Sign In</Nav.Link>
       
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
}
export default Header;