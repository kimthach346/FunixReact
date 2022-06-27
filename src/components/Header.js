import React, { useState } from "react"
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

function Header() {
    const [state, toggleNav] = useState(false)
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                <div className='container'>
                    <NavbarToggler onClick={() => toggleNav(!state)} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="/assets/images/logo.png" height="30" width="41" 
                            alt="Rito" />
                        <span>Quản lý nhân viên</span>
                    </NavbarBrand>
                    <Collapse navbar isOpen={state}>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink className="nav-link" to="/staffList">
                                    <span className="fa fa-home fa-lg"></span> Nhân Viên
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/department">
                                    <span className="fa fa-info fa-lg"></span> Phòng Ban
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/salary">
                                    <span className="fa fa-list fa-lg"></span> Bảng Lương
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
                </Navbar>
            </React.Fragment>
        )
    }

export default Header