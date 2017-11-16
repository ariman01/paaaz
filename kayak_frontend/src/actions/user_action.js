import { userConstants } from '../constants';
import { userapi } from '../api';
import { alert_action } from './';
//import { history } from '../_helpers';
export const useraction={
    signin,
    signup,
    getuserdetails,
    updateuserdetails
};
function signin(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        userapi.signin(email, password)
            .then(
                responseJson => {
                    if(responseJson.code==201)
                    {
                        dispatch(success(responseJson.user));
                        history.push('/Mainhome');
                    }
                    else
                    {
                        dispatch(failure(responseJson.message));
                        dispatch(alert_action.error(responseJson.message));
                    }
                } );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function signup(user) {
    return dispatch => {
        dispatch(request(user));

        userapi.signup(user)
            .then(
                responseJson => {
                    if(responseJson.code==201) {
                        dispatch(success());
                        history.push('/Mainhome');
                        dispatch(alert_action.success('Registration successful'));
                    }
                    else
                    {
                        dispatch(failure(error));
                        dispatch(alert_action.error(error));
                    }
                });
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
