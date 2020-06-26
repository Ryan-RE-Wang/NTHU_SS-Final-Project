import axios from 'axios';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import '@babel/polyfill';

const clubKey = 'clubs';


export function listClubs(searchText='') {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_listPosts(searchText));
        }, 500);
    });
}

// Simulated server-side code
function _listClubs(searchText='') {
    let clubString = localStorage.getItem(clubKey);
    let clubs = clubString ? JSON.parse(postString) : [];
    if (clubs.length > 0 && searchText) {
        clubs = clubs.filter(c => {
            return c.text.toLocaleLowerCase().indexOf(searchText.toLowerCase()) !== -1
        });
    }
    return clubs;
};

export function createClubs() {
    return new Promise((resolve, reject) => {
        resolve(_createClubs());
    });
}

// Simulated server-side code
function _createClubs() {
    const newClub = {

    };
    const clubs = [
        newClub,
        ..._listClubs()
    ];
    localStorage.setItem(clubKey, JSON.stringify(clubs));
    return newPost;
}

