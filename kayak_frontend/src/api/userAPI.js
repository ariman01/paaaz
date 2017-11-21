export const userapi= {
    signinAPI,
    signupAPI,
    //getuserdetails,
    //updateuserdetails
};
const headers = {
    'Accept': 'application/json'
};
function signupAPI(user)
{
    console.log("its user in userAPI signup"+user.username+user.password);
    const requestOptions = {
        method: 'POST',
        credentials:'include',
        mode: 'cors',
        headers: { ...headers,'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch('http://localhost:3010/users/signup', requestOptions)
        .then((response) =>{
            return response;
        });
}
function signinAPI(user)
{
        const requestOptions = {
            method: 'POST',
            credentials:'include',
            headers: { ...headers,'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        return fetch('http://localhost:3010/users/login', requestOptions)
            .then((response) =>{
                return response;
            });
}

/*function getuserdetails()
{
    const requestOptions = {
        method: 'POST',
        credentials:'include',
        mode:'cors',
        headers: { ...headers,'Content-Type': 'application/json'},
    };
    return fetch('http://localhost:3010/getuserdetails', requestOptions)
        .then((response) => response.json()).then((responseJson) => {
            return responseJson;
        });
}

function updateuserdetails(user)
{
    const requestOptions = {
        method: 'POST',
        credentials:'include',
        mode:'cors',
        headers: { ...headers,'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };
    return fetch('http://localhost:3010/updateuserdetails', requestOptions)
        .then((response) => response.json()).then((responseJson) => {
            return responseJson;
        });
}*/