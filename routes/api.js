const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const postTask = require('../model/post');

router.get('/all', (req, res) => {
    res.json(JSON.stringify(postTask.getAll()));
})
router.post('/new', bodyParser.json(), (req, res) =>{
    let title = req.body.title;
    let description = req.body.description;
    postTask.newPost(title, description);
    res.send('post added');

}) 
module.exports = router;