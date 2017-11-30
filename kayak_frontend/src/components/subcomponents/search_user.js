import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleUserSearch} from './../../api/adminAPI';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import SearchedUser from './searched_user'

class SearchUser extends Component {
constructor(){
    super();
    this.searchuser ={}
  }


  render() {
    return (
              <div>
              <div>
                  <AdminDashboardHeader/>
              </div>

              <div className = "car-details-body">
                  <div style = {{marginLeft:520}}>
                      <input style={{width : 350}} placeholder="Enter email id of the user" id="email" onChange={(email) => {this.searchuser.email = email.target.value}}/>
                      <button style={{marginLeft:15}} onClick ={() => this.props.handleUserSearch(this.searchuser)} ><strong>Search</strong></button>
                      <br/>
                      <br/>
                  </div>
                <div className ="car-details-body-left-nav">

                </div>

                <div className ="car-details-body-centre">
                {this.props.searchedUser.length > 0 ?
                    this.props.searchedUser.map((user) => {
                        return (<div><SearchedUser data={user} style={{paddingTop: 10}}/></div>);
                    })
                    : ''
                }
                </div>
                <div className ="car-details-body-right-nav">

                </div>
              </div>

              </div>
           );
  }
}




function mapDispatchToProps(dispatch) {
    return bindActionCreators({handleUserSearch:handleUserSearch},dispatch);
}

function mapStateToProps(state){
  console.log("Search users mapStateToProps: "+state.admin_reducer.searchedUser);
  return{
      searchedUser: state.admin_reducer.searchedUser,
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchUser);
