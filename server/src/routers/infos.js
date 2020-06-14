const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');

const router = express.Router();

router.use(bodyParser.json());
router.use(accessController); // Allows cross-origin HTTP requests






router.post('',function(req, res, next){
    const {mood, text} = req.body;
    console.log("get user info")
});



module.exports = router;


