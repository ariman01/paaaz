import { userConstants } from '../constants';
import { userapi } from '../api/userAPI';
import { alert_actions } from './alert_action';
import {history,saveServerToken} from "../utils/util";
import * as UTIL from  "../utils/util";
export const useraction={
    signin_action,
    signup_action,
    setUser_action,
    getuserdetails_action,
    edituserdetails_action,
    deleteuser_action
};

function signin_action(user) {
    return dispatch => {
        console.log("User sign in request: user",user);
        userapi.signinAPI(user)
            .then(
                response => {
                    if(response.status===201){
                        response.json().then((response) => {
                            console.log(response.userinfo);
                            console.log("signin_action"+response);
                            dispatch(success(response.userinfo));
                            UTIL.saveServerToken(response.userinfo,response.servertoken,"user");
                            history.push('/flights');
                        });
                    }else{
                        dispatch(failure(response.message));
                        dispatch(alert_actions.error(response.message));
                    }
                } );
    };
    function success(user) { return { type: 'LOGIN_SUCCESS', user } }
    function failure(error) { return { type: 'LOGIN_FAILURE', error } }
}

function signup_action(user) {
    return dispatch => {
        userapi.signupAPI(user)
            .then(
                response => {
                    if(response.status===201)
                    {
                            response.json().then((response) => {
                                if(response.code===201)
                                {
                                dispatch(success(response));
                                saveServerToken(user.username);
                                history.push('/flights');
                                }
                                else
                                {
                                    dispatch(failure(response.message));
                                }
                        });
                    }
                    else
                    {
                        dispatch(failure(response.message));
                        dispatch(alert_actions.error(response.message));
                    }
                });
    };
    function success(user) { return { type: 'REGISTER_SUCCESS', user } }
    function failure(error) { return { type: 'REGISTER_FAILURE', error } }
}
function setUser_action(email)
{
    console.log("its set user action");
    return dispatch => {
        dispatch(setUser({user_id:email}));
    };
    function setUser(result){return { type :'SET_USER',result }}
}


function getuserdetails_action(payload) {
    console.log("its getuserdetails"+payload.email);
    return dispatch => {
        userapi.getuserdetailsAPI(payload)
            .then(
                response => {
                    if(response.status===201)
                    {
                        response.json().then((response) => {
                            if(response.code===201)
                            {
                              console.log("get user detail response:",response);
                                dispatch(success(response));
                                history.push('/userdetails');
                            }
                            else
                            {
                                dispatch(failure(response.message));
                            }
                        });
                    }
                    else
                    {
                        dispatch(failure(response.message));
                    }
                });
    };
    function success(result) { return { type: 'GETUSER_DETAILS', result:result.result[0] } }
    function failure(error) { return { type: 'GETALL_FAILURE', error } }
}

function edituserdetails_action(user) {
    console.log("its edit user details actions"+user.first_name);
    return dispatch => {
        userapi.edituserdetailsAPI(user)
            .then(
                response => {
                    if(response.status===201)
                    {
                        response.json().then((response) => {
                            if(response.code===201)
                            {
                                dispatch(success(response));
                                history.push('/flights');
                            }
                            else
                            {
                                dispatch(failure(response.message));
                            }
                        });
                    }
                    else
                    {
                        dispatch(failure(response.message));
                        dispatch(alert_actions.error(response.message));
                    }
                });
    };
    function success(user) { return { type: 'EDITUSER_SUCCESS', user } }
    function failure(error) { return { type: 'EDITUSER_FAILURE', error } }
}

function deleteuser_action(user) {
    return dispatch => {
        userapi.deleteuserAPI(user)
            .then(
                response => {
                    if(response.status===201)
                    {
                        response.json().then((response) => {
                            if(response.code===201)
                            {
                                dispatch(success(response));
                                history.push('/flights');
                            }
                            else
                            {
                                dispatch(failure(response.message));
                            }
                        });
                    }
                    else
                    {
                        dispatch(failure(response.message));
                        dispatch(alert_actions.error(response.message));
                    }
                });
    };
    function success(user) { return { type: 'DELETE_SUCCESS', user } }
    function failure(error) { return { type: 'DELETE_FAILURE', error } }
}
