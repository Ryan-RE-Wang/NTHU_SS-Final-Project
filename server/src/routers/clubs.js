const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');

const clubModel = require('../model/club.js');

const router = express.Router();

router.use(bodyParser.json());
router.use(accessController); // Allows cross-origin HTTP requests

// List
router.post('/school', function(req, res, next) {
    const {school} = req.body;
    clubModel.list(school).then(club => {
        res.json(club)
    }).catch(next);
});


// Create
router.post('', function(req, res, next) {
    const {id, userid, school, clubname, facebook, instagram, clubpic, clubpassword, description} = req.body;
    if (!id) {
        const err = new Error('There must be some form you are not complete!');
        err.status = 400;
        throw err;
    }
    
    clubModel.create(id, userid, school, clubname, facebook, instagram, clubpic, clubpassword, description).then(club => {
        res.json(club)
    }).catch(next);
});

router.get('/detail', function(req, res, next) {
    const {clubname} = req.query;

    clubModel.getClubdetail(clubname).then(details => {

        return clubModel.getClubUserEmail(details.userid).then((useremail)=>{
            res.json({
                ...details,
                useremail
            })
        })
    }).catch(detail => {
        console.log(detail);
    });
});

router.post('/delete', function(req, res, next) {
    const {id} = req.body;
    if (!id) {
        const err = new Error('Post ID are required');
        err.status = 400;
        throw err;
    }
    clubModel.deleteclub(id).then(club => {
        res.json(club);
    }).catch(next);
});

module.exports = router;
