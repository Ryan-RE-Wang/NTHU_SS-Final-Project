import axios from 'axios';
import moment from 'moment';
import 'babel-polyfill';

// Develop server URL
const postBaseUrl = 'http://localhost:4000/api';
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

export default function createPost(
    id,
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
    tags, 
    account) {
    let url = `${postBaseUrl}/posts`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        id,
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
        tags,
        account
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}


export function createTouch(id) {
    let url = `${postBaseUrl}/posts/${id}/Touch`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        console.log(res.data);
        return res.data;
    });

}