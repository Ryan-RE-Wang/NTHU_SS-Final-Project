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
        default:
            return{
                ...state
            }
    }
}
