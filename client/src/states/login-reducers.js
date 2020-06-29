import { StatisticLabel } from "semantic-ui-react";


/* login process */
const initLoginFormState = {
    loading: false,
    alreadyLogin:false,
    loginMsg:'',
    showMsg:false,
    username:'',
    email:'',
    createAccountForm:false,
    loginType:'',
    userId:-1
}

export function login(state = initLoginFormState , action){
    //console.log(action);
    switch(action.type){
        case '@INFO/START_LOGIN':
            return{
                ...state,
                loading: true,
                showMsg:false,
                loginMsg:''
            }
        case '@INFO/SUCCESS_LOGIN':
            return{
                ...state,
                alreadyLogin: true,
                loading: false,
                username: action.username,
                email:action.email,
                createAccountForm: false,
                loginType:'normal',
                userId:action.userId
            }
        case '@INFO/FAIL_LOGIN':
            return{
                ...state,
                alreadyLogin: false,
                loading: false,
                loginMsg: action.msg,
                showMsg: true
            }
        case '@INFO/LOGOUT':
            console.log("logout")
            return{
                ...state,
                ...initLoginFormState,
            }
        case '@INFO/CHANGE-FORM':
            return{
                ...state,
                createAccountForm: !state.createAccountForm
            }
        case '@INFO/LOGINSUCCESS_FB':
            console.log(action)
            return{
                ...state,
                alreadyLogin: true,
                loading: false,
                username: action.name,
                createAccountForm: false,
                loginType:'FB',
                userId:action.userid
            }
        default:
            return{
                ...state
            }
    }
}


/* login page */
const initLoginPageState = {
    loginPageOpen: false
};
export function loginPage(state = initLoginPageState, action){
    switch(action.type){
        case'@Login_Page/CLOSE':
            return{
                loginPageOpen:false
            }
        case'@Login_Page/OPEN':
            return{
                loginPageOpen: true
            }
        default: return state
    }
}
