const express = require('express');
const multer = require('multer');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

let posts = [];

// Create a new post
router.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const post = {
    id: posts.length + 1,
    content: req.body.content,
    imageUrl: `/uploads/${req.file.filename}`,
    upvotes: 0,
    downvotes: 0,
    comments: [] // Initialize comments as an empty array
  };
  posts.push(post);
  res.status(201).json(post);
});

// Get all posts
router.get('/', (req, res) => {
  res.json(posts);
});

// Update a post
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedPost = req.body;
  posts = posts.map(post => (post.id === parseInt(id) ? { ...post, ...updatedPost } : post));
  res.json(updatedPost);
});

// Delete a post
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  posts = posts.filter(post => post.id !== parseInt(id));
  res.status(204).end();
});

// Delete all posts
router.delete('/', (req, res) => {
  posts = [];
  res.status(204).end();
});

// Upvote a post
router.post('/:id/upvote', (req, res) => {
  const { id } = req.params;
  const post = posts.find(post => post.id === parseInt(id));
  if (post) {
    post.upvotes += 1;
    res.json(post);
  } else {
    res.status(404).send('Post not found');
  }
});

// Downvote a post
router.post('/:id/downvote', (req, res) => {
  const { id } = req.params;
  const post = posts.find(post => post.id === parseInt(id));
  if (post) {
    post.downvotes += 1;
    res.json(post);
  } else {
    res.status(404).send('Post not found');
  }
});

// Add a comment to a post
router.post('/:id/comments', (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  const post = posts.find(post => post.id === parseInt(id));
  if (post) {
    post.comments.push(comment);
    res.status(201).json(post);
  } else {
    res.status(404).send('Post not found');
  }
});

module.exports = router;