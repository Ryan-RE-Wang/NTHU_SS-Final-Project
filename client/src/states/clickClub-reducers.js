const initClubState = {      
    userid: '',      
    school: '',     
    clubname: '',   
    facebook: '',    
    instagram: '',   
    clubpic: '',     
    clubpassword: '',
    description: ''   
}

export function club(state = initClubState, action) {
    switch(action.type){
        case '@CLUB/START':
            return{
                ...state
            }
        case '@CLUB/SUCCESS':
            return{
                userid: action.userid,
                clubname: action.clubname,
                facebook: action.facebook,
                instagram: action.instagram,
                clubpic: action.clubpic,
                clubpassword: action.clubpassword,
                description: action.description
            }
        case '@CLUB/FAIL':
            return{
                ...state
            }
        
        default:
            return{
                ...state
            }
    }
}
