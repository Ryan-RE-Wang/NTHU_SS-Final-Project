import axios from 'axios';
import moment from 'moment';
import 'babel-polyfill';

// Develop server URL
const postBaseUrl = 'http://localhost:4000/api';
// Production server URL
//const postBaseUrl = 'http://server-db.us-east-1.elasticbeanstalk.com/api';


export function listPosts(searchText = '', category='', start = '', mode = null, club = '', order = '', userid = '', startofPost = '') {
    let url = `${postBaseUrl}/posts/getPost`;

    console.log(`Making GET request to: ${url}`);

    return axios.get(url, {searchText, category, start, mode, club, order, userid, startofPost}).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}

export function createPost(
    title,
    content,
    startdatetime,
    enddatetime,
    ticket,
    location,
    fileurl,
    tags,
    mode,
    club,
    userid) {
    let url = `${postBaseUrl}/posts`;

    console.log(`Making posts POST request to: ${url}`);

    return axios.post(url, {
        title,
        content,
        startdatetime,
        enddatetime,
        ticket,
        location,
        fileurl,
        tags,
        mode,
        club,
        userid
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}

export function createTouch(id) {
    let url = `${postBaseUrl}/posts/${id}`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}

export function getpostdetail(id) {
    let url = `${postBaseUrl}/posts/get`;

    console.log(`Making getdetail request to: ${url}`);

    return axios.get(url, {id}).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    })
}

export function deletepost(id) {
    let url = `${postBaseUrl}/posts/delete`;

    console.log(`Making delete request to: ${url}`);

    return axios.post(url, {id}).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}