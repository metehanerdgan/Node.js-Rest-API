const express = require('express');
const { getPosts, createPost, getDetail, getUpdate, deletePost, searchPost } = require('../controllers/post');
const auth = require("../middleware/auth.js");

const router = express.Router();

// Gönderi rotalarını tanımlar
router.get('/getPost', getPosts);
router.post('/createPost', auth, createPost);
router.get('/getDetail/:id', getDetail);
router.patch('/getUpdate/:id', auth, getUpdate);
router.delete('/deletePost/:id', auth, deletePost);
router.delete('/searchPost/:id', searchPost);

module.exports = router;
