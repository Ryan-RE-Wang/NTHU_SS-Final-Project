const initPageState = {
    id: '',
    title: '',
    content: '',
    startdatetime: '',
    enddatetime: '',
    ticket: '',
    fileurl: '',
    location: '',
    tags: [],
    club: '',
    startFetching:'false'
}

export function page(state = initPageState, action) {
    switch(action.type){
        case '@POST/GETPAGE':
            return{
                id: action.id,
                title: action.title,
                content: action.content,
                startdatetime: action.startdatetime,
                enddatetime: action.enddatetime,
                ticket: action.ticket,
                fileurl: action.fileurl,
                location: action.location,
                tags: action.tags,
                club: action.club
            }
        case '@POST/START-FETCHING':
            return{
                startFetching:true,
                ...state
            }
        case '@POST/END-FETCHING':
            return{
                id: action.id,
                title: action.title,
                content: action.content,
                startdatetime: action.startdatetime,
                enddatetime: action.enddatetime,
                ticket: action.ticket,
                fileurl: action.fileurl,
                location: action.location,
                tags: action.tags,
                club: action.club,
                startFetching:false
            }

        default:
            return{
                ...state
            }
    }
}
