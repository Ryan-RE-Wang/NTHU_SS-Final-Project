const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');

const clubModel = require('../model/club.js');

const router = express.Router();

router.use(bodyParser.json());
router.use(accessController); // Allows cross-origin HTTP requests

// List
router.get('/:id', function(req, res, next) {
    const {id} = req.params;
    clubModel.list(id).then(posts => {
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

module.exports = router;
