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

export function setSearchDate(searchDate) {
    return {
        type: '@SEARCH_DATE/SET_SEARCH_DATE',
        searchDate
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


export function listPosts(searchText, date) {
    return (dispatch, getState) => {
        dispatch(startLoading());
        return listPostsFromApi(searchText, null, date).then(posts => {
            dispatch(endListPosts(posts));
        }).catch(err => {
            console.error('Error listing posts', err);
        }).then(() => {
            dispatch(endLoading())
        });
    };
};