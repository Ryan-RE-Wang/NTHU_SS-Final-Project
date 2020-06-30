import {getClubdetail} from 'api/club.js';

function start() { 
    return {
        type: '@CLUB/START'
    };
}

function success(clubdetail) {
    return {
        type: '@CLUB/SUCCESS',
        ...clubdetail
    };
}
function fail(clubdetail) {
    return {
        type: '@CLUB/FAIL',
        ...clubdetail
    }
}

export function getClub(clubname){
    return (dispatch,getState) => {

        console.log(clubname)

        dispatch(start());
        
        return getClubdetail(clubname.clubname)  
        .then((clubdetail) => {
            console.log(clubdetail)
            dispatch(success(clubdetail));
            
        }).catch(err => {
            console.error('Error get club detail ', err);
        });
    }
}