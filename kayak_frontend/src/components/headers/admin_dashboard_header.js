import React,{ Component } from 'react';
import './../../images/home.css';
import './../../images/admin.css';
import homeIcon from './../../images/homescreen.png';
import userIcon from './../../images/user3.png';
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem  from 'react-bootstrap/lib/NavItem'
class AdminDashboardHeader extends Component {

    render() {

        return (
            <div className="admin-dashboard-header">
              <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#"><img src={homeIcon}/></a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>
                    <NavDropdown eventKey={1} title="Cars" id="cars">
                      <MenuItem eventKey={1.1}>Search</MenuItem>
                      <MenuItem eventKey={1.2}>Add</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={1.3}>Billing</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={2} title="Flights" id="flights">
                      <MenuItem eventKey={2.1}>Search</MenuItem>
                      <MenuItem eventKey={2.2}>Add</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={2.3}>Billing</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={3} title="Hotels" id="hotels">
                      <MenuItem eventKey={3.1}>Search</MenuItem>
                      <MenuItem eventKey={3.2}>Add</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={3.3}>Billing</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={4} title="Users" id="users">
                      <MenuItem eventKey={4.1}>Search</MenuItem>
                      <MenuItem eventKey={4.2}>Add</MenuItem>
                    </NavDropdown>
                  </Nav>
                  <Nav pullRight>
                    <NavDropdown eventKey={4} title="My Admin" id="admin">
                      <MenuItem eventKey={4.1}>Profile</MenuItem>
                      <MenuItem eventKey={4.2}>Logout</MenuItem>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
        );
    }
}



export default AdminDashboardHeader;
