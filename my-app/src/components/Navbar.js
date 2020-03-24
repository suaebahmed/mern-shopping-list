import React, { useState } from 'react';
import { connect } from 'react-redux'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';
import RegisterModel from '../auth/register-modal';
import Logout from '../auth/Logout';
import LoginModel from '../auth/LoginModel';
import { Link } from 'react-router-dom';

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // auth...
  const {isAuthenticated, user} = props.auth;
  var buttons;
  if(isAuthenticated){
    buttons = (
    <Nav className="ml-auto" navbar>
    <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
        {user.email}
    </DropdownToggle>
    <DropdownMenu right>
    <DropdownItem>
          <Logout/>
      </DropdownItem>
      <DropdownItem>
          <NavLink href='/profile'>
            Profile
          </NavLink>
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
  </Nav>
  )
}else{
    buttons = (

    <Nav className="ml-auto" navbar>
        <NavItem>
            <RegisterModel/>
        </NavItem>
        <NavItem>
            <LoginModel/>
        </NavItem>
        <NavItem>
            <NavLink href='/profile'> profile
              {/* <Link to='/profile'>Profile</Link> */}
            </NavLink>
        </NavItem>
    </Nav>
    )
  }
  return (
    <div>
      <Navbar color="info" light expand="md">
        <Container>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />

          <Collapse isOpen={isOpen} navbar>
              {buttons}
          </Collapse>

        </Container>
      </Navbar>
    </div>
  );
}
const mapStateToProps = (state) => ({
  auth: state.authReducer
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavbar)
