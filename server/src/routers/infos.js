const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');
const InfoModel = require('../model/infos.js');

const router = express.Router();

router.use(bodyParser.json());
router.use(accessController); // Allows cross-origin HTTP requests


// create info
router.post('createInfo',function(req, res, next){
    const {username, password, email} = req.body;
    console.log("create user info", username, password, email)

    InfoModel.checkInfo(email)
    .then(
        (info) => {
            if(info !== null) {
                res.json({
                    loginSuccess: false,
                    msg: 'this email has been used'
                })

            }else{
                InfoModel.create(username, password, email)
                .then(
                    (info) => {
                        res.json({
                            ...info,
                            loginSuccess: true,
                            msg: 'this email has been used'
                        })
                    }
                )
            }
        }
    )
    .catch(next)
});

// login
router.get('',function(){
    const {password, email} = req.body;
    console.log("login user info", username, password, email)

    InfoModel.login(password, email)
    .then(
        (info) => {
            if(info !== null){
                res.json({
                    ...info,
                    loginSuccess:true,
                    msg:'login success'
                })
            } else {
                res.json({
                    loginSuccess: false,
                    msg:'wrong password'
                })
            }
        }
    ).catch(next)
});

// get info
router.get('',function(req,res){

});
router
// logout

module.exports = router;


