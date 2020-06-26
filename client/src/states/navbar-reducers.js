const initNavBarState = {
    nthuOpen: false,
    nctuOpen: false,
    categoryOpen: false,
    tagClick: '',
    startSearch: false,
    loginPage: false,
    sideBarOpen: false,
    userInfoOpen:false
    // animateComplete: false,
}


export function navBar(state=initNavBarState,action){
    switch(action.type){
        case('@NAVBAR/OPEN-USERINFO'):
            return{
                ...state,
                userInfoOpen: !state.userInfoOpen
            }
        case('@NAVBAR/CHANGE-TOGGLE'):
            return{
                ...state,
                sideBarOpen: !state.sideBarOpen
            }
        case('@NAVBAR/CLICK-NTHU'):
            console.log("nthu");
            return{
                ...state,
                nthuOpen: !state.nthuOpen,
                nctuOpen: false,
                categoryOpen: false
                
            }
        case('@NAVBAR/CLICK-NCTU'):
            return{
                ...state,
                nctuOpen: false,
                nthuOpen: !state.nctuOpen,
                categoryOpen: false
            }
        case('@NAVBAR/CLICK-CATAGORY'):
            return{
                ...state,
                nctuOpen: false,
                nthuOpen: false,
                categoryOpen: !state.categoryOpen
            }
        case('@NAVBAR/CLICK-OTHER'):
            return{
                ...state,
                nctuOpen: false,
                nthuOpen: false,
                categoryOpen: false
            }
        case('@NAVBAR/OPEN-SEARCHBAR'):
            return{
                ...state,
                startSearch: !state.startSearch
            }
        case('@@NAVBAR/CLICK-TAG'):
            return{
                ...state,
                tagClick: action.tag
            }
        default:
            return{
                ...state
            }
    }
}