// Add rest api calls related to cars
function searchcars(payload)
{
    const requestOptions = {
        method: 'POST',
        credentials:'include',
        headers: { ...headers,'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return fetch('http://localhost:3001/cars', requestOptions)
        .then((response) => response.json()).then((responseJson) => {
            return responseJson;
        });
}
module.exports.searchcars=searchcars;