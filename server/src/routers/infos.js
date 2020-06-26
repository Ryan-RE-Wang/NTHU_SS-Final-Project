const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');
const InfoModel = require('../model/infos.js');

const router = express.Router();

router.use(bodyParser.json());
router.use(accessController); // Allows cross-origin HTTP requests


// create info
router.post('/createInfo',function(req, res, next){
    const {username, password, email} = req.body;
    console.log("create user info", username, password, email)

    InfoModel.checkInfo(email)
    .then(
        (info) => {          
            res.json({
                loginSuccess: false,
                msg: 'this email has been used'
            })
    }).catch(
        (err) =>{
            console.log("create a new account",err);
            InfoModel.create(username, password, email)
            .then(
                (info) => {
                    res.json({
                        ...info,
                        loginSuccess: true,
                        msg: 'create new account successfully'
                    })
                }
            )
    }).catch(next)
});

// login
router.get('/login',function(req,res,next){
    const {password,email} = req.query;

    console.log(password,email,);
    InfoModel.login(password, email)
    .then(
        (info) => {  
            console.log(info);
            res.json({
                ...info,
                loginSuccess:true,
                msg:'login success'
            })
    }).catch((err) => {
        res.json({
            loginSuccess:false,
            msg:'wrong password or email'
        })
    }).catch(next);
});
//update info
router.post('/updateInfo/:id/:updateType/:updateValue/:oldValue',function(req,res,next){
    const {id,updateType,updateValue,oldValue} = req.params;

    if(updateType === 'password'){
        InfoModel.updatePassword(id,updateValue,oldValue).then(
            (info) =>{
                res.json({
                    ...info,
                    updateSucess:true,
                    msg: "update password succescfully"
                })
            }
        ).catch(()=>{
            res.json({
                updateSuccess:false,
                msg:"wrong password"
            })
        }).catch(next);
    }else if(updateType === 'username'){
        InfoModel.updateUsername(id,updateValue).then(
            (info) =>{
                res.json({
                    ...info,
                    updateSucess:true,
                    msg: "update username succescfully"
                })
            }
        ).catch(next);
    }else {
        res.json({
            updateSucess:false,
            msg:'update unsuccessful, you cannot modify this attribute'
        })
    }
})

// logout

module.exports = router;


