import {createInfo as createInfoFromAPI,login as loginFromAPI ,
        createInfoFB as createInfoFBFromAPI, loginFB as loginFBFromAPI} from 'api/infos.js'
import {facebookLogin as facebookLoginFromAPI ,facebookLogout as facebookLogoutFromAPI,getUserData as getFBUserDataFromAPI} from 'api/facebook.js'



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

export function login(email, password){    // high order action genrator
    console.log("login");
    console.log(email, password);
    return (dispatch,getState) => {
        
        dispatch(startLogin());
        
        return loginFromAPI(email,password)  
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
export function createAccount(username, password, email){
    return (dispatch,getState) => {
        dispatch(startLogin());

        return createInfoFromAPI(username, password, email)
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
export function loginWithFB(){
    return (dispatch,getstate) =>{
        dispatch(startLogin());

        return facebookLoginFromAPI()
        .then( // add a function'  
            (response) => {                   
            if(response) return getFBUserDataFromAPI().then((userdata)=>{
                return userdata
            })
        }).then(
            (response) => {
                //console.log(response)
                //dispatch(LoginSuccessFB(response))

                return loginFBFromAPI(response.email).then((userInfo) => {
                    //dispatch(getUserId(userId))
                    dispatch(LoginSuccessFB(response))
                })
        }).catch(err => {
            console.error("fb login fail", err);
        })
    }
}
export function createAccountWithFB(){
    return (dispatch,getstate) =>{
        dispatch(startLogin());
        return facebookLoginFromAPI()
        .then(
            (response) => {
                if(response){
                    return createInfoFBFromAPI(response.username,response.email).then((userInfo) => {
                        return userInfo
                    })
                }
            }
        ).then((userInfo)=>{
            if(userInfo.loginSuccess){
                dispatch(successLogin(userInfo))
            }else{
                dispatch(failLogin(userInfo))
            }
        })
        .catch(err => {
            console.error("fb login fail", err);
        })

    }
    return {
        type:'@INFO/LOGIN_FB'
    }
}

// logout process
function _logout(){
    return {
        type: '@INFO/LOGOUT'
    }
}
export function logout(loginType='normal'){ 
    console.log("login type:",loginType);
    return(dispatch,getstate) => {
        if(loginType='normal'){
            dispatch(_logout())
        }else if(loginType='FB'){
            return facebookLogoutFromAPI()
            .then(
                dispatch(_logout())
            ).catch(
                (err) => {console.log("fb logout error:",err)}
            )
        }
    }
}
function LoginSuccessFB(response){
    return{
        type:'@INFO/LOGINSUCCESS_FB',
        ...response
    }
}
function getUserId(userId){
    return{
        type:'@INFO/GETUSERID_FB',
        userId:userId 
    }
}


// update process

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




