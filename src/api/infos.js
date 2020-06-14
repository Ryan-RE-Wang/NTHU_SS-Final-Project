import axios from 'axios';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import { object } from 'prop-types';
//import '@babel/polyfill';

const infoKey = 'infos';


export function getInfo(account = '') {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_getInfo(account));
        }, 500);
    });
}

// Simulated server-side code
function _getInfo(account = '') {
    let infoString = localStorage.getItem(infoKey);
    let infos = infoString ? JSON.parse(infoString) : [];


    if (infos.length > 0 && account) {
        infos = infos.filter(i => {
            return i.account.toLocaleLowerCase().indexOf(searchText.toLowerCase()) !== -1
        });
    }
    return infos;
};

export function createInfo(account = '',password = '', eamil = '') {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_createInfo(account,password));
        }, 1000);
    });
}

// Simulated server-side code
function _createInfo(account = '', password = '', email = '') {
    
    let infoString = localStorage.getItem(infoKey);
    let oldInfos = infoString ? JSON.parse(infoString) : [];
    let sameAccountName = false;
    let createFail = false;
    if (oldInfos.length > 0) {
        oldInfos.map((obj,i) => {
            
                if (obj.account === account){
                    sameAccountName = true;
                    
                }
            
        });
    }
    console.log( oldInfos);

    if(sameAccountName){
        return {
            loginSuccess: false,
            msg: 'account has been used'
        }
    }

    const newInfo = {
        id: oldInfos.length,
        account: account,
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

export function login(account = '',password = '') {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_login(account,password));
        }, 1000);
    });
}
// Simulated server-side code
function _login(account = '', password = '') {
    console.log(password);
    let infoString = localStorage.getItem(infoKey);
    let oldInfo = infoString ? JSON.parse(infoString) : [];
    
    console.log(oldInfo);
    if (oldInfo.length > 0) {
        oldInfo = oldInfo.filter(i => {
            if(i.account === account) return i;
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



export function updateInfo(account = '',email) {

};

// Simulated server-side code
function _updateInfo(account = '', passward = '') {

};
export function clearAllInfo(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_clearAllInfo());
        }, 1000);
    });
}
function _clearAllInfo(){
    let clear = [];
    localStorage.setItem(infoKey,JSON.stringify(clear));
    console.log("clear all info");
    return {
        msg:"clear all"
    }
}

