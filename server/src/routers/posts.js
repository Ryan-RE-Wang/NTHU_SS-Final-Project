const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');

const postModel = require('../model/posts.js');
const touchModel = require('../model/touch.js');

const router = express.Router();

router.use(bodyParser.json());
router.use(accessController); // Allows cross-origin HTTP requests

// List
router.get('/getPost', function(req, res, next) {
    const {searchText, category, start, mode, club, order, userid} = req.body;
    postModel.list(searchText, category, start, mode, club, order, userid).then(posts => {
        return posts;
    }).then(post => {
            res.json(post)
    }).catch(next);
});

// Create
router.post('', function(req, res, next) {
    const {id,
        title,
        content,
        startdate,
        enddate,
        starttime,
        endtime,
        ticket,
        location,
        fileurl,
        tags,
        mode, 
        club, 
        userid} = req.body;
    if (!userid) {
        const err = new Error('There must be some form you are not complete!');
        err.status = 400;
        throw err;
    }
    postModel.create(
        id,
        title,
        content,
        startdate,
        enddate,
        starttime,
        endtime,
        ticket,
        location,
        fileurl,
        tags,
        mode, 
        club, 
        userid).then(post => {
        res.json(post)
    }).catch(next);
});

// touch
router.post('/:id', function(req, res, next) {
    const {id} = req.params;
    if (!id) {
        const err = new Error('Post ID are required');
        err.status = 400;
        throw err;
    }
    touchModel.touch(id).then(post => {
        res.json(post);
    }).catch(next);
});

router.get('/update', function(req, res, next) {
    const {id} = req.body;
    if (!id) {
        const err = new Error('Post ID are required');
        err.status = 400;
        throw err;
    }
    postModel.getdetail(id).then(post => {
        res.json(post);
    }).catch(next);
});

router.post('/delete', function(req, res, next) {
    const {id} = req.body;
    if (!id) {
        const err = new Error('Post ID are required');
        err.status = 400;
        throw err;
    }
    postModel.deletepost(id).then(post => {
        res.json(post);
    }).catch(next);
});

module.exports = router;
