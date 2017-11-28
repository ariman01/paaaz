import {searchcarsAPI} from '../api/carAPI';
import {history} from "../utils/util";

export function searchcars_action(payload){
    console.log("its date in searchcar action"+payload.start_date);
    return dispatch => {
        var ONE_DAY = 1000 * 60 * 60 * 24;
        var start_d= new Date(payload.start_date+'T00:00:00');
        var end_d= new Date(payload.end_date+'T00:00:00');
        var date1_ms = start_d.getTime();
        var date2_ms = end_d.getTime();
        var difference_ms = Math.abs(date1_ms - date2_ms);
        var setday = {
            carfromdate: start_d.toDateString(),
            cartodate: end_d.toDateString(),
            days: Math.round(difference_ms/ONE_DAY)
        }

        dispatch(setcardates(setday));
        searchcarsAPI(payload)
            .then(
                response => {
                    if(response.status===201)
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
        console.log("action console for reult:"+setday.days);
    };

    function setcardates(result){return { type :'CAR_DAYS',result }}
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
