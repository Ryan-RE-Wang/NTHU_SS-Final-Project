const initClubState = {      
    clubname: '',    
}

export function club(state = initClubState, action) {
    console.log(action)
    switch(action.type){
        case '@CLUB/GETCLUB':
            return{

                clubname: action.clubname,
            }
        default:
            return{
                ...state
            }
    }
}
