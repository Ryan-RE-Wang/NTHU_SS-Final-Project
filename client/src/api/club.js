import axios from 'axios';
import moment from 'moment';
import 'babel-polyfill';

// Develop server URL
const postBaseUrl = 'http://localhost:4000/api';
// Production server URL
//const postBaseUrl = 'http://server-db.us-east-1.elasticbeanstalk.com/api';

const postKey = 'posts';

export function listClub(clubId) {
    let url = `${postBaseUrl}/posts`;
    let query = [];
    if (clubId)
        query.push(`id=${clubId}`);
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

export default function createClub(id,
    clubname,
    facebook,
    instagram,
    clubpic,
    clubpassword) {
    let url = `${postBaseUrl}/posts`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        id,
        clubname,
        facebook,
        instagram,
        clubpic,
        clubpassword
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}