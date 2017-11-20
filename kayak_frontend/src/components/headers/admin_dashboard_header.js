import React,{ Component } from 'react';
import './../../images/home.css';
import './../../images/admin.css';
import homeIcon from './../../images/homescreen.png';
import userIcon from './../../images/user3.png';
class AdminDashboardHeader extends Component {

  render() {

    return (
      <div className="admin-dashboard-header">
            <nav className="home-nav">
                <div className="home-logo" style ={{height:10}}>
                    <img src={homeIcon}/>
                </div>
                <ul className="home-navbar" >
                    <a className="home-nav-link" href="/hotels">Hotels</a>
                    <a className="home-nav-link" href="/flights">Flights</a>
                    <a className="home-nav-link" href="/cars">Cars</a>
                    <a className="home-nav-link" href="/hotels">Users</a>
                    <a className="home-nav-link" href="/hotels">Analysis</a>
                    <a className="user-account" href="#" ><span><img src ={userIcon}/></span> &nbsp;My Admin</a>

                </ul>
             </nav>
             <hr className="home-uline"/>
      </div>
          );
  }
}



export default AdminDashboardHeader;
