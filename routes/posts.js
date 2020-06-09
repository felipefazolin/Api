const express = require ('express');
const router = express.Router();
//criando posts no db
const Post = require('../models/Post');
const path = require('path');
/*
router.get('/', (req,res) => {
    res.send('We are on posts');
});
*/



router.get('/', (req,res) => {

    res.sendFile(path.join(__dirname+'/index.html'));
    
});





/*
router.get('/', async (req,res) => {
 
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch(err){
        res.json({message:err});
    }    
    
});
*/


/*

router.post('/', async (req,res) => {

const post = new Post({
    title: req.body.title,
    description: req.body.description
});

try{
    const savedPost = await post.save();
    res.json(savedPost);
} catch(err){
    res.json({message:err});
}

});

*/



router.post('/', async (req,res) => {

const post = new Post({
    title: req.body.title,
    description: req.body.description
});
try{
    const savedPost = await post.save();
    res.json(savedPost);
} catch(err){
    res.json({message:err});
}

});


module.exports = router;