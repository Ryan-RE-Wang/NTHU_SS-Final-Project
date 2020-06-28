import axios from 'axios';
import moment from 'moment';
import 'babel-polyfill';

// Develop server URL
const postBaseUrl = 'http://localhost:4000/api/clubs';
// Production server URL
//const postBaseUrl = 'http://server-db.us-east-1.elasticbeanstalk.com/api';


export function listClub(school = '') {
    let url = `${postBaseUrl}`;
    let query = [];
    if (school)
        query.push(`school=${school}`);
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

export default function createClub(id = '',
    userid = '', 
    school = '',
    clubname = '',
    facebook = '',
    instagram = '',
    clubpic = '',
    clubpassword = ''
    ) {
    let url = `${postBaseUrl}`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        id,
        userid,
        school,
        clubname,
        facebook,
        instagram,
        clubpic,
        clubpassword,
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}

export function getClubPassword(clubname = '') {
    let url = `${postBaseUrl}/get`;

    let query = [];
    if (clubname)
        query.push(`clubname`);
    if (query.length)
        url += '?' + query.join('&');

    return axios.get(url, {clubname}).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}

export function getClubdetail(clubname = '') {
    let url = `${postBaseUrl}/detail`;

    let query = [];
    if (clubname)
        query.push(`clubdetail`);
    if (query.length)
        url += '?' + query.join('&');

    return axios.get(url, {clubname}).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}

export function deleteclub(id) {
    let url = `${postBaseUrl}/delete`;

    console.log(`Making delete request to: ${url}`);

    return axios.post(url, {id}).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}
