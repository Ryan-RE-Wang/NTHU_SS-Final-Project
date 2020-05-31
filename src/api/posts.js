import axios from 'axios';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import '@babel/polyfill';

const postKey = 'posts';

export function listPosts(searchText = '' ,catagory='all' date='') {
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
function _createPost(club, title, content,picture='', date, time, alreadyPost=false hashtag=[]) {
    const newPost = {
        id: uuid(),
        club: club,
        title: title,
        content: content,
        picture: picture,
        date: date,
        time: time,
        ts: moment().unix()
        alreadyPost:alreadyPost,
        hashtag:hashtag,
        likes:0
    };
    const posts = [
        newPost,
        ..._listPosts()
    ];
    localStorage.setItem(postKey, JSON.stringify(posts));
    return newPost;
}

export function createVote(id) {
    return new Promise((resolve, reject) => {
        _createVote(id);
        resolve();
    });
}

// Simulated server-side code
function _createVote(id) {
    const posts = _listPosts().map(p => {
        if (p.id === id) {
            p['likes']++;
        }
        return p;
    });
    localStorage.setItem(postKey, JSON.stringify(posts));
}

export function releasePost(id ,takeBack=false) {
    return new Promise((resolve, reject) => {
        _releasePost(id);
        resolve();
    });
}

// Simulated server-side code
function _releasePost(id,takeBack=false) {
    const posts = _listPosts().map(p => {
        if (p.id === id) {
            if(!takeBack)   p['alreadyPost'] = true;
            else p['alreadyPost'] = false;
        }
        return p;
    });
    localStorage.setItem(postKey, JSON.stringify(posts));
}