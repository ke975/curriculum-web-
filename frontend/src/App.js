import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './styled/global.css'

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (

    <div>
      <Navbar color="info" light>
        <NavbarBrand href="https://github.com/ke975/"  className="mr-auto top-fixed "><img src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg" width="40px" height="40px" alt=""/>
        Github
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Sobre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Habilidades</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;