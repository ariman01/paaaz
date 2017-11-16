// add actions related to cars
// carAPI from './carAPI';
function searchcars(payload){
    return dispatch => {

        carAPI.searchcars(payload)
            .then(
                responseJson => {
                    if(responseJson.code == 201)
                    {
                        dispatch(success(responseJson.cars));
                        history.push('/Mainhome');
                    }
                    else
                    {
                        dispatch(failure(responseJson.message));
                    }
                } );
    };
   function success(cars) { return { type: CAR_SUCCESS, cars } }
   function failure(error) { return { type: CAR_FAILURE, error } }

}

exports.searchcars= searchcars;
