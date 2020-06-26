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
    const {searchText, category, start} = req.query;
    postModel.list(searchText, category, start).then(posts => {
        return posts;
    }).then(
        (posts => {
            fileModel.list(posts.fileName)}).then(file => {
                return {posts, file};
            })
    ).catch(next);
});

// Create
router.post('/createPost', function(req, res, next) {
    const {titleValue,
        contentValue,
        startDateValue,
        startTimeValue,
        endDateValue,
        endTimeValue,
        ticketValue,
        locationValue,
        fileName,
        tags,  
        userId} = req.body;
    if (!userId) {
        const err = new Error('There must be some form you are not complete!');
        err.status = 400;
        throw err;
    }
    postModel.create(titleValue,
        contentValue,
        startDateValue,
        startTimeValue,
        endDateValue,
        endTimeValue,
        ticketValue,
        locationValue,
        fileName,
        tags,  
        userId).then(post => {
        res.json(post)
    }).catch(next);
});

// touch
router.post('/touch/:id', function(req, res, next) {
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
//save
router.post('/save', function(req, res, next){
    const {title, content, startDate, endDate, startTime, endTime, ticket,
        location, fileURL, tags} = req.body;

    postModel.save(title, content, startDate, endDate, startTime, endTime, ticket,
        location, fileURL, tags)
    .then(post)=>{
        res.json({
            ...post,
            savePostSuccess: true,
            msg: "save sucessfully"
        })
    }).catch(next);
});
//post
router.post('/post/:id', function(req, res, next){
    const {postId} = req.parms;
    postModel.post(postId)
    .then(()=>{
        res.json({
            postSuccess:true,
            msg: "post sucessfully"
        })
    }).catch(next);
});

module.exports = router;
