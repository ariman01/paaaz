const headers = {
    'Accept': 'application/json'
};
console.log("its test");
export function searchcarsAPI(payload)
{
    console.log("its api"+payload);
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