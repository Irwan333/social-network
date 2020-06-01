const express = require('express');
const {
    getPosts,
    createPost
} = require('../controllers/post');
const {
    requireSignin
} = require('../controllers/auth');
const {
    userById
} = require('../controllers/user');
const {
    runValidation
} = require('../validator');
const {
    createPostValidator
} = require('../validator/post');
const router = express.Router();

router.get('/', getPosts)
router.post('/post', requireSignin, createPostValidator, runValidation, createPost)

router.param('userId', userById);

module.exports = router;