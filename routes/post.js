const express = require('express')
const {getPosts,createPost,getDetail,getUpdate,deletePost,searchPost} = require('../controllers/post')
const router = express.Router()
const auth = require("../middleware/auth.js")

router.get('/getPost', getPosts)
router.post('/createPost',auth, createPost)
router.get('/getDetail/:id', getDetail)
router.patch('/getUpdate/:id',auth, getUpdate)
router.delete('/deletePost/:id',auth, deletePost)
router.delete('/searchPost/:id', searchPost)

module.exports = router
