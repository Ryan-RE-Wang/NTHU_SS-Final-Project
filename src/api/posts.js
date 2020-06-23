import axios from 'axios';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import 'babel-polyfill';

// Develop server URL
const postBaseUrl = 'http://localhost:8080/api';
// Production server URL
//const postBaseUrl = 'http://server-db.us-east-1.elasticbeanstalk.com/api';

const postKey = 'posts';

export function listPosts(searchText = '', category='all', date='', start) {
    let url = `${postBaseUrl}/posts`;
    let query = [];
    if (searchText)
        query.push(`searchText=${searchText}`);
    if(category)
        query.push(`category=${category}`)
    if(date)
        query.push(`data=${date}`)
    if (start)
        query.push(`start=${start}`);
    if (query.length)
        url += '?' + query.join('&');

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        //console.dir(res.data);
        return res.data;
    });
}

export function createPost(titleValue,
    titleDanger,
    contentValue,
    contentDanger,
    startDateValue,
    startDateDanger,
    startTimeValue,
    startTimeDanger,
    endDateValue,
    endDateDanger,
    endTimeValue,
    endTimeDanger,
    ticketValue,
    ticketDanger,
    locationValue,
    locationDanger,
    file,
    fileDanger,
    tags) {
    let url = `${postBaseUrl}/posts`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        titleValue,
        titleDanger,
        contentValue,
        contentDanger,
        startDateValue,
        startDateDanger,
        startTimeValue,
        startTimeDanger,
        endDateValue,
        endDateDanger,
        endTimeValue,
        endTimeDanger,
        ticketValue,
        ticketDanger,
        locationValue,
        locationDanger,
        file,
        fileDanger,
        tags
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
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