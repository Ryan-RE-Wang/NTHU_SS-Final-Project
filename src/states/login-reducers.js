import { StatisticLabel } from "semantic-ui-react";


/* login process */
const initLoginFormState = {
    loading: false,
    alreadyLogin:false,
    loginMsg:'',
    showMsg:false,
    account:'',
    email:'',
    createAccountForm:false
}

export function login(state = initLoginFormState , action){
    switch(action.type){
        case '@INFO/START_LOGIN':
            return{
                ...state,
                loading: true
            }
        case '@INFO/SUCCESS_LOGIN':
            return{
                ...state,
                alreadyLogin: true,
                loading: false,
                account: action.account,
                createAccountForm: false
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
