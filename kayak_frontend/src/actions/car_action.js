import * as searchcarsAPI from '../api/carAPI';
export function searchcars_action(payload){
    console.log("its action"+payload);
    return dispatch => {
        searchcarsAPI(payload)
            .then(
                responseJson => {
                    if(responseJson.code == 201)
                    {
                        dispatch(success(responseJson.cars));
                       // history.push('/Mainhome');
                    }
                    else
                    {
                        dispatch(failure(responseJson.message));
                    }
                } );
    };
   function success(cars) { return { type: 'CAR_SUCCESS', cars } }
   function failure(error) { return { type: 'CAR_FAILURE', error } }
}
