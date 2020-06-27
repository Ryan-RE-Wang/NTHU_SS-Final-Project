const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');

const postModel = require('../model/posts.js');
// const fileModel = require('../model/postFile.js')
const touchModel = require('../model/touch.js');

const router = express.Router();

router.use(bodyParser.json());
router.use(accessController); // Allows cross-origin HTTP requests

// List
router.get('/getPost', function(req, res, next) {
    const {searchText, category, start, mode, club} = req.body;
    postModel.list(searchText, category, start, mode, club).then(posts => {
        return posts;
    }).then(post => {
            res.json(post)
    }).catch(next);
});

// Create
router.post('/createPost', function(req, res, next) {
    const {id,
        titleValue,
        contentValue,
        startDateValue,
        startTimeValue,
        endDateValue,
        endTimeValue,
        ticketValue,
        locationValue,
        fileName,
        tags,
        mode, 
        club, 
        userId} = req.body;
    if (!userId) {
        const err = new Error('There must be some form you are not complete!');
        err.status = 400;
        throw err;
    }
    postModel.create(
        id,
        titleValue,
        contentValue,
        startDateValue,
        startTimeValue,
        endDateValue,
        endTimeValue,
        ticketValue,
        locationValue,
        fileName,
        tags,
        mode, 
        club, 
        userId).then(post => {
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
