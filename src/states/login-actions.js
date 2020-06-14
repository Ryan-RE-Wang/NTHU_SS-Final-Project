import {createInfo as createInfoFromAPI,login as loginFromAPI } from 'api/infos.js'
// change form
export function changeForm(){
    return {
        type:'@INFO/CHANGE-FORM'
    }
}
// create account process
export function createAccount(account, password, email){
    return (dispatch,getState) => {
        dispatch(startLogin);
        return createInfoFromAPI(account, password, email)
        .then( (userInfo)=>{
            if(userInfo.loginSuccess){
                dispatch(successLogin(userInfo))
                dispatch(closeLoginForm())
            }else{
                dispatch(failLogin(userInfo))
            }
        }).catch(err => {
            console.error('Error creating account', err);
        });
    }
}
// login process
function startLogin() {
    return {
        type: '@INFO/START_LOGIN'
    };
}

function successLogin(userInfo) {
    return {
        type: '@INFO/SUCCESS_LOGIN',
        ...userInfo
    };
}
function failLogin(userInfo) {
    return {
        type: '@INFO/FAIL_LOGIN',
        ...userInfo
    }
}

export function login(account,password){    // high order action genrator
    return (dispatch,getState) => {
        
        dispatch(startLogin());
        
        return loginFromAPI(account,password)  
        .then((userInfo) => {
            if(userInfo.loginSuccess){
                dispatch(successLogin(userInfo))
                dispatch(closeLoginForm())
            }else{
                dispatch(failLogin(userInfo))
            }
            
        }).catch(err => {
            console.error('Error login ', err);
        });

    }
}

// logout process
export function logout(){ 
    
    return {
        type: '@INFO/LOGOUT'
    };
}
// update process



// export function showLoginPage(){
//     return{
//         type:
//     }
// }

// login page
export function closeLoginForm(){
    return{
        type:'@Login_Page/CLOSE'
    }
}
export function openLoginForm(){
    return{
        type:'@Login_Page/OPEN'
    }
}

