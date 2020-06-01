const Post = require('../models/post');
// const formidable = require('formidable');
// const fs = require('fs');
// const _ = require('lodash');

exports.getPosts = (req, res) => {
  const posts = Post.find().select("_id title body")
    .then((posts) => {
      res.json({
        posts
      })
    })
    .catch(err => console.log(err));
}

exports.createPost = (req, res) => {
  const post = new Post(req.body)
  post.save()
    .then(result => {
      res.json({
        post: result
      })
    })
}