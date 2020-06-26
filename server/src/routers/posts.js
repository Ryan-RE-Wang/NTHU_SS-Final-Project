const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');

const postModel = require('../model/posts.js');
const touchModel = require('../model/touch.js');

const router = express.Router();

router.use(bodyParser.json());
router.use(accessController); // Allows cross-origin HTTP requests

// List
router.get('', function(req, res, next) {
    const {searchText, category, date, start} = req.query;
    postModel.list(searchText, start).then(posts => {
        res.json(posts);
    }).catch(next);
});


// Create
router.post('', function(req, res, next) {
    
    const {state} = req.body;
    if (state.titleDanger || state.contentDanger || state.startDateDanger || state.startTimeDanger || state.endDateDanger || state.endTimeDanger || state.ticketDanger || state.locationDanger || state.fileDanger) {
        const err = new Error('There must be some form you are not complete!');
        err.status = 400;
        throw err;
    }
    postModel.create(state, 0).then(post => {
        res.json(post);
    }).catch(next);
});

// touch
router.post('/:id', function(req, res, next) {
    const {id} = req.params;
    if (!id) {
        const err = new Error('Post ID and are required');
        err.status = 400;
        throw err;
    }
    touchModel.touch(id).then(post => {
        res.json(post);
    }).catch(next);
});

module.exports = router;
