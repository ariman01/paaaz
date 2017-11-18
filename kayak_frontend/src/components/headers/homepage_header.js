import React,{ Component } from 'react';
import './../../images/home.css';
import homeIcon from './../../images/homescreen.png';
import userIcon from './../../images/user3.png';
class HomePageHeader extends Component {

  render() {
    console.log("Search CarSearch Bar Page");
    return (
      <div className="row">
            <nav className="home-nav">
                <div className="home-logo" style ={{height:10}}>
                    <img src={homeIcon}/>
                </div>
                <ul className="home-navbar" >
                    <a className="home-nav-link" href="/hotels">Hotels</a>
                    <a className="home-nav-link" href="/flights">Flights</a>
                    <a className="home-nav-link" href="/cars">Cars</a>
                    <a className="user-account" href="#" ><span><img src ={userIcon}/></span> &nbsp;My Account</a>
                </ul>
             </nav>
             <hr className="home-uline"/>
      </div>
          );
  }
}

export default HomePageHeader;
