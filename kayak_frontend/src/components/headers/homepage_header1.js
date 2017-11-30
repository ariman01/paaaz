import React,{ Component } from 'react';
import './../../images/header.css';
import homeIcon from './../../images/homescreen.png';
import userIcon from './../../images/user3.png';
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem  from 'react-bootstrap/lib/NavItem'
class HomeHeader1 extends Component {

    render() {

        return (
            <div >
              <Navbar inverse collapseOnSelect className="home-page-header">
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#"><img src={homeIcon}/></a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>
                    <NavItem eventKey={1} href="#" style={{marginLeft : 40 , fontSize : "12pt"}}>Cars</NavItem>
                    <NavItem eventKey={1} href="#" style={{marginLeft : 40 , fontSize : "12pt"}}>Flights</NavItem>
                    <NavItem eventKey={1} href="#" style={{marginLeft : 40 , fontSize : "12pt"}}>Hotels</NavItem>
                  </Nav>
                  <Nav pullRight>
                    <NavDropdown eventKey={4} style={{fontSize : "11pt"}} title="My Account" id="admin">
                      <MenuItem eventKey={4.1} style={{fontSize : "11pt"}} >Sign up</MenuItem>
                      <MenuItem eventKey={4.2} style={{fontSize : "12pt"}} >Sign in</MenuItem>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
        );
    }
}



export default HomeHeader1;
