/* Search text */


export function searchText(state = '', action) {
    switch (action.type) {
        case '@SEARCH_TEXT/SET_SEARCH_TEXT':
            return action.searchText;
        default:
            return state;
    }
}

export function searchStartDate(state = '', action) {
    switch (action.type) {
        case '@SEARCH_START_DATE/SET_START_SEARCH_DATE':
            return action.searchStartDate;
        default: 
            return state;
    }
}

export function searchEndDate(state = '', action) {
    switch (action.type) {
        case '@SEARCH_END_DATE/SET_END_SEARCH_DATE':
            return action.searchEndDate;
        default: 
            return state;
    }
}

/* Posts */

const initPostState = {
    postLoading: false,
    posts: [],
    hasMore: true
};

export function post(state = initPostState, action) {
    switch (action.type) {
        case '@POST/START_LOADING':
            return {
                ...state,
                postLoading: true
            };
        case '@POST/END_LOADING':
            return {
                ...state,
                postLoading: false
            };
        case '@POST/END_LIST_POSTS':
            return {
                ...state,
                posts: action.posts,
                hasMore: action.posts.length > 0
            };
        default:
            return state;
    }
}
