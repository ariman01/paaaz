export const userapi= {
    signin,
    signup,
    getuserdetails,
    updateuserdetails
};
const headers = {
    'Accept': 'application/json'
};
function signup(user)
{
    console.log(user);
    const requestOptions = {
        method: 'POST',
        credentials:'include',
        headers: { ...headers,'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch('http://localhost:3001/signup', requestOptions)
        .then((response) => response.json()).then((responseJson) => {
            return responseJson;
            });
}
function signin(username,password)
{
        console.log(user);
        const requestOptions = {
            method: 'POST',
            credentials:'include',
            headers: { ...headers,'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        return fetch('http://localhost:3001/signin', requestOptions)
            .then((response) => response.json()).then((responseJson) => {
                return responseJson;
        });
}

function getuserdetails()
{
    const requestOptions = {
        method: 'POST',
        credentials:'include',
        mode:'cors',
        headers: { ...headers,'Content-Type': 'application/json'},
    };
    return fetch('http://localhost:3001/getuserdetails', requestOptions)
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
    return fetch('http://localhost:3001/updateuserdetails', requestOptions)
        .then((response) => response.json()).then((responseJson) => {
            return responseJson;
        });
}