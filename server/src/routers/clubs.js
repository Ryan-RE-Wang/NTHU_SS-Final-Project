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
    clubModel.list(school).then(posts => {
        res.json(posts)
    }).catch(next);
});


// Create
router.post('', function(req, res, next) {
    const {id, clubName, facebook, instagram, clubPic, clubPassword} = req.body;
    if (!id) {
        const err = new Error('There must be some form you are not complete!');
        err.status = 400;
        throw err;
    }
    clubModel.create(id, clubName, facebook, instagram, clubPic, clubPassword).then(post => {
        res.json(post)
    }).catch(next);
});

router.get('/:clubname', function(req, res, next) {
    const {clubname} = req.body;
    clubModel.getClubPassword(clubname).then(posts => {
        res.json(posts)
    }).catch(next);
});

router.get('/:clubdetail', function(req, res, next) {
    const {clubname} = req.body;
    clubModel.getClubdetail(clubname).then(posts => {
        res.json(posts)
    }).catch(next);
});

router.post('/:newclubname', function(req, res, next) {
    const {id, newclubname} = req.body;
    clubModel.updateClubName(id, newclubname).then(posts => {
        res.json(posts)
    }).catch(next);
});

router.post('/:instagram', function(req, res, next) {
    const {id, newinstagram} = req.body;
    clubModel.updateinstagram(id, newinstagram).then(posts => {
        res.json(posts)
    }).catch(next);
});

router.post('/:facebook', function(req, res, next) {
    const {id, newfacebook} = req.body;
    clubModel.updatefacebook(id, newfacebook).then(posts => {
        res.json(posts)
    }).catch(next);
});

router.post('/:newpic', function(req, res, next) {
    const {id, newpic} = req.body;
    clubModel.updateclubpic(id, newpic).then(posts => {
        res.json(posts)
    }).catch(next);
});

router.post('/:pw', function(req, res, next) {
    const {id, userid, oldpw, newpw} = req.body;
    clubModel.updateclubpassword(id, userid, oldpw, newpw).then(posts => {
        res.json(posts)
    }).catch(next);
});

router.post('/:mode', function(req, res, next) {
    const {id, savemode} = req.body;
    clubModel.updatesavemode(id, savemode).then(posts => {
        res.json(posts)
    }).catch(next);
});

router.post('/:leader', function(req, res, next) {
    const {id, userid, pw, newleader} = req.body;
    clubModel.updateleader(id, userid, pw, newleader).then(posts => {
        res.json(posts)
    }).catch(next);
});

module.exports = router;
