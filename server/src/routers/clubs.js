const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');

const clubModel = require('../model/club.js');

const router = express.Router();

router.use(bodyParser.json());
router.use(accessController); // Allows cross-origin HTTP requests

// List
router.get('/:school', function(req, res, next) {
    const {school} = req.params;
    clubModel.list(school).then(club => {
        res.json(club)
    }).catch(next);
});


// Create
router.post('', function(req, res, next) {
    const {id, userid, school, clubname, facebook, instagram, clubPic, clubpassword} = req.body;
    if (!id) {
        const err = new Error('There must be some form you are not complete!');
        err.status = 400;
        throw err;
    }
    clubModel.create(id, userid, school, clubname, facebook, instagram, clubPic, clubpassword).then(club => {
        res.json(club)
    }).catch(next);
});

router.get('/get/:clubname', function(req, res, next) {
    const {clubname} = req.body;
    clubModel.getClubPassword(clubname).then(pw => {
        res.json(pw)
    }).catch(next);
});

router.get('/detail/:clubdetail', function(req, res, next) {
    const {clubname} = req.body;
    clubModel.getClubdetail(clubname).then(details => {
        res.json(details)
    }).catch(next);
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
