import React, { Component } from "react"
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from "reactstrap"
import { NavLink } from "react-router-dom"

class Header extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            isNavOpen: false
        }   
        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                <div className='container'>
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.png" height="30" width="41" 
                            alt="Rito" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
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
                <NavItem>Nhân Viên</NavItem>
                {/* <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Rito</h1>
                                <p>We take inspiration from...</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron> */}
                <hr />
            </React.Fragment>
        )
    }
}

export default Header