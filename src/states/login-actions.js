import {createInfo as createInfoFromAPI,login as loginFromAPI } from 'api/infos.js'



// change form
export function changeForm(){
    return {
        type:'@INFO/CHANGE-FORM'
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
    console.log("login");
    return (dispatch,getState) => {
        
        dispatch(startLogin());
        
        return loginFromAPI(account,password)  
        .then((userInfo) => {
            if(userInfo.loginSuccess){
                dispatch(successLogin(userInfo))
            }else{
                dispatch(failLogin(userInfo))
            }
            
        }).catch(err => {
            console.error('Error login ', err);
        });

    }
}

// create account process
export function createAccount(account, password, email){
    return (dispatch,getState) => {
        dispatch(startLogin());

        return createInfoFromAPI(account, password, email)
        .then( (userInfo)=>{
            if(userInfo.loginSuccess){
                dispatch(successLogin(userInfo))
            }else{
                dispatch(failLogin(userInfo))
            }
        }).catch(err => {
            console.error('Error creating account', err);
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

