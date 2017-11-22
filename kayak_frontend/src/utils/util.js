// Add utility methods
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export const saveServerToken = (data) => {
    console.log("saveServerToken",data);
    if(data.userinfo){
        localStorage.setItem('currentUser',JSON.stringify(data.userinfo));
    }
    if(data.servertoken){
        localStorage.setItem('servertoken',data.servertoken);
    }

};

export const deleteServerToken = (server_token) => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('servertoken');
};

export const getHTTPHeader = function(){
    var header = {
        ...headers,
        servertoken:localStorage.servertoken?localStorage.servertoken:null
    }
    return header;
};
