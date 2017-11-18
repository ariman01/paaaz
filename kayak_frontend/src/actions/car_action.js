import {searchcarsAPI} from '../api/carAPI';
import {history} from "../utils/util";

export function searchcars_action(payload){
    console.log("its action"+payload);
    const cars= {
        'no':'123'
    }
    return dispatch => {
        searchcarsAPI(payload)
            .then(
                responseJson => {
                    if(responseJson.code == 200)
                    {
                        console.log("its"+responseJson);
                        var cars= responseJson.cars;
                        dispatch(success(responseJson.cars));
                        history.push('/searchcars');
                    }
                    else
                    {
                        dispatch(failure(responseJson.message));
                    }
                }
                );
    };
   function success(cars) { return { type: 'CAR_SUCCESS', cars } }
   function failure(error) { return { type: 'CAR_FAILURE', error } }
}
