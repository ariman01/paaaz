import {searchhotelsAPI} from '../api/hotelAPI';
import {history} from "../utils/util";

export function searchhotels_action(payload){
    console.log("its action"+payload.src_city);
    return dispatch => {
        searchhotelsAPI(payload)
            .then(
                response => {
                    if(response.status===201)
                    {
                        response.json().then((response) => {
                            console.log("its result in hotelaction"+ response.result);
                            console.log("its"+response);
                            dispatch(success(response.result));
                            history.push('/hoteldetails');
                        });
                    }
                    else
                    {
                        dispatch(failure(response.message));
                    }
                }
            );
    };
    function success(result) { return { type: 'HOTEL_SUCCESS', result } }
    function failure(error) { return { type: 'HOTEL_FAILURE', error } }
}
