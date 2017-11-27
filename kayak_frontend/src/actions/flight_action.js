import {searchflightsAPI} from '../api/flightAPI';
import {history} from "../utils/util";

export function searchflights_action(payload){
    console.log("its action"+payload.start_date);
    return dispatch => {
        var ONE_DAY = 1000 * 60 * 60 * 24;
        var start_d= new Date(payload.start_date);
        var end_d= new Date(payload.end_date);
        var date1_ms = start_d.getTime();
        var date2_ms = end_d.getTime();
        var difference_ms = Math.abs(date1_ms - date2_ms);
        var setday = {
            flightfromdate: start_d.toDateString(),
            flighttodate: end_d.toDateString(),
            days: Math.round(difference_ms/ONE_DAY)
        }
        dispatch(setflightdates(setday));
        searchflightsAPI(payload)
            .then(
                response => {
                    if(response.status==201)
                    {
                        response.json().then((response) => {
                            dispatch(success(response.result));
                            history.push('/flightdetails');
                        });
                    }
                    else
                    {
                        dispatch(failure(response.message));
                    }
                }
            );
    };
    function setflightdates(result){return { type :'FLIGHT_DAYS',result }}
    function success(result) { return { type: 'FLIGHT_SUCCESS', result } }
    function failure(error) { return { type: 'FLIGHT_FAILURE', error } }
}
export function currentflight_action(payload)
{
    console.log("its payload in currentflight_action"+payload.capacity);
    return dispatch => {
        dispatch(success(payload));
    };
    function success(result) { return { type: 'CURRENT_FLIGHT', result } }
}

