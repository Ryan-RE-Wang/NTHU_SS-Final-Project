import axios from 'axios';
import moment from 'moment';
import 'babel-polyfill';

// Develop server URL
const postBaseUrl = 'http://localhost:4000/api';
// Production server URL
//const postBaseUrl = 'http://server-db.us-east-1.elasticbeanstalk.com/api';
export function listPostsByCategory(category, order){
    let url = `${postBaseUrl}/posts/getPost/byCatagory`;
    let query = [];
    let odr ;
    if(order === 'A to Z') odr = 'AZ';
    else odr = order;

    query.push(`category=${category}`);
    query.push(`order=${order}`);
    url += '?' + query.join('&');
    console.log(`Making GET request to: ${url}`);
    
    return axios.get(url).then(function(res){
        if(res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}

export function listPosts(searchText = '', category='', start = '', end='', mode = null, club = '', order = 'touch', userid = '', startofPost = '') {
    let url = `${postBaseUrl}/posts/getPost`;

    let query = [];
    if (searchText)
        query.push(`searchText=${searchText}`);
    if (category)
        query.push(`category=${category}`);
    if (start)
        query.push(`start=${start}`);
    if (end)
        query.push(`end=${end}`)
    if (mode) 
        query.push(`mode=${mode}`);
    if (club)
        query.push(`club=${club}`);
    if (order)
        query.push(`order=${order}`);
    if (userid)
        query.push(`userid=${userid}`);
    if (startofPost)
        query.push(`startofpost=${startofPost}`);
    if (query.length)
        url += '?' + query.join('&');

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
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