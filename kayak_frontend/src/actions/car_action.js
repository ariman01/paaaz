import {searchcarsAPI} from '../api/carAPI';
import {history} from "../utils/util";

export function searchcars_action(payload){
    console.log("its action"+payload.src_city);
    return dispatch => {
        searchcarsAPI(payload)
            .then(
                response => {
                    if(response.status==201)
                    {
                        response.json().then((response) => {
                        console.log(response.result);
                        dispatch(success(response.result));
                        history.push('/cardetails');
                    });
                    }
                    else
                    {
                        dispatch(failure(response.message));
                    }
                }
                );
    };
   function success(result) { return { type: 'CAR_SUCCESS', result } }
   function failure(error) { return { type: 'CAR_FAILURE', error } }
}
export function currentcar_action(payload)
{
    console.log("its payload in currentcar_action"+payload.capacity);
    return dispatch => {
        dispatch(success(payload));
    };
    function success(result) { return { type: 'CURRENT_CAR', result } }
}
