import axios from 'axios';
import moment from 'moment';
import 'babel-polyfill';

// Develop server URL
const postBaseUrl = 'http://localhost:4000/api';
// Production server URL
//const postBaseUrl = 'http://server-db.us-east-1.elasticbeanstalk.com/api';

const postKey = 'posts';

export function listPosts(searchText = '', category='all', start = '', mode = null, club = '', order = '', userid = '') {
    let url = `${postBaseUrl}/posts/getPost`;

    console.log(`Making GET request to: ${url}`);

    return axios.get(url, {searchText, category, start, mode, club, userid}).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}

export default function createPost(
    id,
    titleValue,
    contentValue,
    startDateValue,
    startTimeValue,
    endDateValue,
    endTimeValue,
    ticketValue,
    locationValue,
    file,
    tags,
    mode,
    club, 
    userid) {
    let url = `${postBaseUrl}/posts`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        id,
        titleValue,
        contentValue,
        startDateValue,
        startTimeValue,
        endDateValue,
        endTimeValue,
        ticketValue,
        locationValue,
        file,
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
    let url = `${postBaseUrl}/posts/update`;

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