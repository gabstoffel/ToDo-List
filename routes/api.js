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
router.delete('/del', bodyParser.json(), (req, res) => {
    /* const {id} = req.params; */
    /* const urlparams = new URLSearchParams(window.location.search);
    const id = urlparams.get("id");
    console.log(id);
    postTask.deletePost(id);
    res.send(); */
    console.log(req.body)
    console.log(req.headers)
})
module.exports = router;