import React from 'react';
import {NavItem, NavLink, Nav, NavbarBrand, Navbar} from 'reactstrap';
import Carro from './Carro';



class Navegacion extends React.Component {

  render() {
    return (
     <Navbar color="light" light expand="md">
          <NavbarBrand href="/"> {this.props.titulo}</NavbarBrand>
            <Nav className="ml-auto" navbar>
            <NavItem>
              <Carro/>
            </NavItem>

            <NavItem>
              <NavLink href="/">React</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/">JavaScript</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/">Angular</NavLink>
            </NavItem>


            </Nav>
     </Navbar>
    );
  }



}

export default Navegacion;
