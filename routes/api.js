import express from 'express';
import bodyParser from 'body-parser';
import postTask from '../model/post.js';
const router = express.Router();

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
    let postID = req.body.id;
    console.log(`este é o id do post: ${postID}`);
    postTask.deletePost(postID);
    res.send();
    
})
export default router;