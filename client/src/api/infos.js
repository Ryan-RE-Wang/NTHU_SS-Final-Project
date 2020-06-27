import axios from 'axios';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import { object } from 'prop-types';
import {facebookLogin} from 'api/facebook.js';
//import '@babel/polyfill';
//
const infoKey = 'infos';
const infoBaseUrl = 'http://localhost:4000/api/infos';


export function getInfo(userId = -1) {
    const url = `${infoBaseUrl}`;
    return axios.get(url, {
        userId
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}
export function createInfo(username = '',password = '', email = '') {
    const url = `${infoBaseUrl}/createInfo`;
    return axios.post(url, {
        username,
        password,
        email
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}
export function createInfoFB(username = '',email = ''){
    const url = `${infoBaseUrl}/createInfoFB`;
    return axios.post(url,{
        username,
        email
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}
export function login(email = '',password = '') {
    const url = `${infoBaseUrl}/login`;
    return axios.get(url, {
        password,
        email
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}
export function loginFB(email){
    const url = `${infoBaseUrl}/loginFB`;
    console.log("login fb");
    return axios.get(url, {
        email
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}
export function updatePassword(userId = '', updateValue, oldValue) {
    const updateType = "password";
    const url = `${infoBaseUrl}/updateInfo/${userId}/${updateType}/${updateValue}/${oldValue}`;

    return axios.post(url)
    .then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
};
export function updateUsername(userId = '', updateValue, oldValue) {
    const updateType = "username";
    const url = `${infoBaseUrl}/updateInfo/${userId}/${updateType}/${updateValue}/${oldValue}`;

    return axios.post(url)
    .then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
};
export function clearAllInfo(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_clearAllInfo());
        }, 1000);
    });
}




// Simulated server-side code
function _createInfo(username = '', password = '', email = '') {
    
    let infoString = localStorage.getItem(infoKey);
    let oldInfos = infoString ? JSON.parse(infoString) : [];
    let sameEmail = false;
    let createFail = false;
    if (oldInfos.length > 0) {
        oldInfos.map((obj,i) => {
            
        if (obj.email === email){
            sameEmail = true;    
        }        
        });
    }
    console.log(oldInfos); /// 

    if(sameEmail){
        return {
            loginSuccess: false,
            msg: 'this email has been used'
        }
    }

    const newInfo = {
        userId: oldInfos.length,
        username: username,
        password: password,
        email: email
    }
    const infos = [
        ...oldInfos,
        newInfo
    ]
    const userInfo = {
        ...newInfo,
        loginSuccess: true,
        msg:'create info success'
    }
    
    localStorage.setItem(infoKey,JSON.stringify(infos));
    return userInfo;
};
// Simulated server-side code
function _login(email = '', password = '') {
    console.log(password);
    let infoString = localStorage.getItem(infoKey);
    let oldInfo = infoString ? JSON.parse(infoString) : [];
    
    console.log(oldInfo);
    if (oldInfo.length > 0) {
        oldInfo = oldInfo.filter(i => {
            if(i.email === email) return i;
            else return
        });
    }
    if (oldInfo.length === 0 ){
        return{
            loginSuccess: false,
            msg:'cant found the account'
        }
    }
    
    let userInfo = {};
    if(oldInfo[0].password === password){
        userInfo = {
            ...oldInfo[0],
            loginSuccess: true,
            msg:'login success'
        }
        console.log("login success");
    }else{
        userInfo = {
            loginSuccess: false,
            msg:'wrong password'
        }
        console.log("wrong password");
    }
    return userInfo;
};
// Simulated server-side code
function _updateInfo(userId = '', passward = '') {

};
function _clearAllInfo(){
    let clear = [];
    localStorage.setItem(infoKey,JSON.stringify(clear));
    console.log("clear all info");
    return {
        msg:"clear all"
    }
}
// Simulated server-side code
function _getInfo(userId = -1) {
    let infoString = localStorage.getItem(infoKey);
    let infos = infoString ? JSON.parse(infoString) : [];


    if (infos.length > 0 && userId!==-1) {
        infos = infos.filter(i => {
            if(userId === i.userId) return i
        });
    }
    return infos;
};


