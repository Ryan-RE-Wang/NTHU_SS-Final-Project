import axios from 'axios';
import moment from 'moment';
import 'babel-polyfill';

// Develop server URL
const postBaseUrl = 'http://localhost:4000/api';
// Production server URL
//const postBaseUrl = 'http://server-db.us-east-1.elasticbeanstalk.com/api';
export function listPostsByCategory(category, order){
    let url = `${postBaseUrl}/posts/getPostbyCategory`;
    let query = [];
    let odr ;
    if(order === 'A to Z') odr = 'AZ';
    else odr = order;

    query.push(`category=${category}`);
    query.push(`order=${odr}`);
    url += '?' + query.join('&');

    console.log(`Making GET request to: ${url}`);
    
    return axios.get(url).then(function(res){
        if(res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}

export function listPostsBySearch(searchText='', start='', end='') {
    let url = `${postBaseUrl}/posts/getPostBySearch`;

    let query = [];
    if (searchText)
        query.push(`searchText=${searchText}`);
    if (start)
        query.push(`start=${start}`);
    if (end)
        query.push(`end=${end}`);
    if (query.length)
        url += '?' + query.join('&');

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}
export function listPostsbyclub(clubname, userid) {
    let url = `${postBaseUrl}/posts/getPostbyclub`;

    let query = [];
    if (clubname)
        query.push(`clubname=${clubname}`);
    if (userid)
        query.push(`userid=${userid}`)
    if (query.length)
        url += '?' + query.join('&');


    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}
export function listPostsByTouch(){
    let url = `${postBaseUrl}/posts/getPostbyTouch`;

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
