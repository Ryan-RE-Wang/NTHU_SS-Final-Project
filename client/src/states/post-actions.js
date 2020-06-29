import {
    listPosts as listPostsFromApi,
} from 'api/posts.js';

/*  Search text */

export function setSearchText(searchText) {
    return {
        type: '@SEARCH_TEXT/SET_SEARCH_TEXT',
        searchText
    };
}

export function setSearchStartDate(searchStartDate) {
    return {
        type: '@SEARCH_START_DATE/SET_START_SEARCH_DATE',
        searchStartDate
    }
}

export function setSearchEndDate(searchEndDate) {
    return {
        type: '@SEARCH_END_DATE/SET_END_SEARCH_DATE',
        searchEndDate
    }
}
/*  Posts */

function startLoading() {
    return {
        type: '@POST/START_LOADING'
    };
}

function endLoading() {
    return {
        type: '@POST/END_LOADING'
    };
}

function endListPosts(posts) {
    return {
        type: '@POST/END_LIST_POSTS',
        posts
    };
}


export function listPosts(searchText, startDate, endDate, startofPost) {
    return (dispatch, getState) => {
        dispatch(startLoading());
        return listPostsFromApi(searchText, null, startDate, endDate, null, null, null, startofPost).then(posts => {
            dispatch(endListPosts(posts));
        }).catch(err => {
            console.error('Error listing posts', err);
        }).then(() => {
            dispatch(endLoading())
        });
    };
};