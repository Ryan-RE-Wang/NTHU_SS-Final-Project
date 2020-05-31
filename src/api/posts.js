import axios from 'axios';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import '@babel/polyfill';

const postKey = 'posts';

export function listPosts(searchText = '') {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_listPosts(searchText));
        }, 500);
    });
}

// Simulated server-side code
function _listPosts(searchText = '') {
    let postString = localStorage.getItem(postKey);
    let posts = postString ? JSON.parse(postString) : [];
    if (posts.length > 0 && searchText) {
        posts = posts.filter(p => {
            return p.text.toLocaleLowerCase().indexOf(searchText.toLowerCase()) !== -1
        });
    }
    return posts;
};

export function createPost(club, title, content, date, time) {
    return new Promise((resolve, reject) => {
        resolve(_createPost(club, title, content, date, time));
    });
}

// Simulated server-side code
function _createPost(club, title, content, date, time) {
    const newPost = {
        id: uuid(),
        club: club,
        title: title,
        content: content,
        date: date,
        time: time,
        ts: moment().unix()
    };
    const posts = [
        newPost,
        ..._listPosts()
    ];
    localStorage.setItem(postKey, JSON.stringify(posts));
    return newPost;
}

export function createTouch(id) {
    return new Promise((resolve, reject) => {
        _createTouch(id);
        resolve();
    });
}

// Simulated server-side code
function _createTouch(id) {
    const posts = _listPosts().map(p => {
        if (p.id === id) {
            p[mood.toLowerCase() + 'Votes']++;
        }
        return p;
    });
    localStorage.setItem(postKey, JSON.stringify(posts));
}
