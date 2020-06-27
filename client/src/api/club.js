import axios from 'axios';
import moment from 'moment';
import 'babel-polyfill';

// Develop server URL
const postBaseUrl = 'http://localhost:4000/api';
// Production server URL
//const postBaseUrl = 'http://server-db.us-east-1.elasticbeanstalk.com/api';

const postKey = 'posts';

export default function listClub(school = '') {
    let url = `${postBaseUrl}/posts`;
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

export default function createClub(id,
    userid, 
    school,
    clubname,
    facebook,
    instagram,
    clubpic,
    clubpassword,
    savemode) {
    let url = `${postBaseUrl}/posts`;

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
        savemode
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}

export default function getClubPassword(clubname) {
    let url = `${postBaseUrl}/posts`;

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

export default function getClubdetail(clubname) {
    let url = `${postBaseUrl}/posts`;

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

export default function updateClubName(id, newclubname) {
    let url = `${postBaseUrl}/posts`;
    let query = [];

    if (newclubname)
        query.push(`newclubname`);
    if (query.length)
        url += '?' + query.join('&');

    return axios.post(url, {id, newclubname}).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    })
}

export default function updateClubinstagram(id, newinstagram) {
    let url = `${postBaseUrl}/posts`;
    let query = [];

    if (newinstagram)
        query.push(`instagram`);
    if (query.length)
        url += '?' + query.join('&');

    return axios.post(url, {id, newinstagram}).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    })
}

export default function updateClubfacebook(id, newfacebook) {
    let url = `${postBaseUrl}/posts`;
    let query = [];

    if (newfacebook)
        query.push(`facebook`);
    if (query.length)
        url += '?' + query.join('&');

    return axios.post(url, {id, newfacebook}).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    })
}

export default function updateClubpic(id, newpic) {
    let url = `${postBaseUrl}/posts`;
    let query = [];

    if (newpic)
        query.push(`newpic`);
    if (query.length)
        url += '?' + query.join('&');

    return axios.post(url, {id, newpic}).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    })
}

export default function updateClubpw(id, userid, oldpw, newpw) {
    let url = `${postBaseUrl}/posts`;
    let query = [];

    if (newpw)
        query.push(`pw`);
    if (query.length)
        url += '?' + query.join('&');

    return axios.post(url, {id, userid, oldpw, newpw}).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    })
}

export default function updateClubmode(id, newmode) {
    let url = `${postBaseUrl}/posts`;
    let query = [];

    if (newmode)
        query.push(`mode`);
    if (query.length)
        url += '?' + query.join('&');

    return axios.post(url, {id, newmode}).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    })
}

export default function updateClubleader(id, userid, pw, newleader) {
    let url = `${postBaseUrl}/posts`;
    let query = [];

    if (newleader)
        query.push(`leader`);
    if (query.length)
        url += '?' + query.join('&');

    return axios.post(url, {id, userid, pw, newleader}).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    })
}
