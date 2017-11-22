import { userConstants } from '../constants';
import { userapi } from '../api/userAPI';
import { alert_actions } from './alert_action';
import {history,saveServerToken} from "../utils/util";
export const useraction={
    signin_action,
    signup_action,
};

function signin_action(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        userapi.signinAPI(email, password)
            .then(
                response => {
                    if(response.status==201)
                    {
                        response.json().then((response) => {
                            console.log(response.result);
                            console.log("its"+response);
                            dispatch(success(response.result));
                            history.push('/flights');
                        });
                    }
                    else
                    {
                        dispatch(failure(response.message));
                        dispatch(alert_actions.error(response.message));
                    }
                } );
    };

    function request(user) { return { type: 'LOGIN_REQUEST', user } }
    function success(user) { return { type: 'LOGIN_SUCCESS', user } }
    function failure(error) { return { type: 'LOGIN_FAILURE', error } }
}

function signup_action(user) {
    return dispatch => {
        userapi.signupAPI(user)
            .then(
                response => {
                    if(response.status==201)
                    {
                            response.json().then((response) => {
                                if(response.code==201)
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
