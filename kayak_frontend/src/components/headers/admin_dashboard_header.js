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
import {history} from "./../../utils/util.js";

class AdminDashboardHeader extends Component {

        handle_car_search=()=>{
          history.push('/adminsearchcar');
        };
        handle_car_add=()=>{
          history.push('/adminaddcar');

        };
        handle_car_billing=()=>{
          history.push('/admincarbilling');
        };

        handle_flight_search=()=>{
          history.push('/adminsearchflight');
        };
        handle_flight_add=()=>{
          history.push('/adminaddflight');
        };
        handle_flight_billing=()=>{
          history.push('/adminflightbilling');
        };

        handle_hotel_search=()=>{
          history.push('/adminsearchhotel');
        };
        handle_hotel_add=()=>{
          history.push('/adminaddhotel');
        };
        handle_hotel_billing=()=>{
          history.push('/adminhotelbilling');
        };

        handle_user_add=()=>{
          history.push('/adminadduser');
        };
        handle_user_search=()=>{
          history.push('/adminsearchuser');
        };

    render() {


        return (
            <div >
              <Navbar inverse collapseOnSelect className="admin-dashboard-header">
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#"><img src={homeIcon}/></a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>
                    <NavDropdown eventKey={1} title="Cars" id="cars">
                      <MenuItem eventKey={1.1} onClick={this.handle_car_search}>Search</MenuItem>
                      <MenuItem eventKey={1.2} onClick={this.handle_car_add}>Add</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={1.3} onClick={this.handle_car_billing}>Billing</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={2} title="Flights" id="flights">
                      <MenuItem eventKey={2.1} onClick={this.handle_flight_search}>Search</MenuItem>
                      <MenuItem eventKey={2.2} onClick={this.handle_flight_add}>Add</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={2.3} onClick={this.handle_flight_billing}>Billing</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={3} title="Hotels" id="hotels">
                      <MenuItem eventKey={3.1} onClick={this.handle_hotel_search}>Search</MenuItem>
                      <MenuItem eventKey={3.2} onClick={this.handle_hotel_add}>Add</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={3.3} onClick={this.handle_hotel_billing}>Billing</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={4} title="Users" id="users">
                      <MenuItem eventKey={4.1} onClick={this.handle_user_search}>Search</MenuItem>
                      <MenuItem eventKey={4.2} onClick={this.handle_user_add}>Add</MenuItem>
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
