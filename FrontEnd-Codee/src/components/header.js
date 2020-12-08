import React from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import {Container, Nav,Navbar} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import { NavDropdown} from 'react-bootstrap'
import {Logout} from '../actions/userInfo'
const Header = (props) =>{

    const userInformation=useSelector((state)=>state.userLoginreducer)
     const dispatch=useDispatch()
    const {userInfo}=userInformation;


    const logOuthandler=()=>{
      dispatch(Logout())
    }
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

      {userInfo ? (
 

<NavDropdown title={userInfo.name}id="basic-nav-dropdown">
  <LinkContainer to="/profie">
<NavDropdown.Item href="#action/3.1">profile</NavDropdown.Item>
</LinkContainer>
<NavDropdown.Item  onClick={logOuthandler}>Logout</NavDropdown.Item>

</NavDropdown>

      ):(
        <>
        <LinkContainer to="/signin">
        <Nav.Link ><i className="fa fa-user" ></i> SignIn</Nav.Link>
        </LinkContainer>
      </>
      )}

    
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
}
export default Header;