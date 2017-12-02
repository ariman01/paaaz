import React,{ Component } from 'react';
import {Modal,Button} from 'react-bootstrap';
import facebookicon from './../images/facebookicon.jpg';
import googleicon from './../images/googleicon.jpg';
import {history} from "./../utils/util";
import { useraction } from './../actions/user_action';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import FlightSearchBar from './searchbars/flight_search_bar.js';
import HomeHeader from './headers/homepage_header';
import '../images/home.css';
import HomeScreenButtonPanel from './searchbars/homescreen_button_panel';
class DeleteAccount extends Component
{
    constructor()
    {
        super();
        this.state = {
            showModal:false
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount()
    {
        this.open();
    }
    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }
    handleSubmit(event) {
        event.preventDefault();
        const payload={user_id:"pooja@yahoo.com"};
            this.props.deleteuser_action(payload);
    }
    render() {

        const { showModal } = this.state;
        console.log("its before modal"+showModal);
        return (
            <div className="flighthome">
                <HomeHeader/>
                <div style={{paddingTop:"12%"}}>
                    <HomeScreenButtonPanel/>
                    <FlightSearchBar/>
                </div>

                <div>
                    <Modal style={{paddingTop:100}} bsSize="sm" show={this.state.showModal} onHide={this.close}>
                        <Modal.Header closeButton style={{backgroundColor:'#e0e0e0',color:'#545456'}}>Please Signup to Continue
                        </Modal.Header>
                        <Modal.Body style={{paddingTop:25}}>
                            <div style={{color:'#545456',alignContent:'center'}}><b>Delete Account..?</b></div><br/><br/>
                            <button style={{backgroundColor:'#545456',color:'white',width:250,height:45}} onClick={this.handleSubmit}>Create Account</button>
                        </Modal.Body>
                        <Modal.Footer>
                            <label style={{float:'left'}}>Already have an account? </label><Button onClick={this.login}>SignIn</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteuser_action:useraction.deleteuser_action},dispatch);
}
export default connect(null,mapDispatchToProps)(DeleteAccount);
