const express = require('express');
const router = express.Router();

// Mock blog data
let blogs = [
  {
    id: 1,
    title: 'Welcome to PenCraft',
    content: 'This is a sample blog post about our amazing platform.',
    author: 'demo',
    authorId: 1,
    createdAt: new Date().toISOString(),
    likes: 0,
    comments: []
  }
];

// Get all blogs
router.get('/', (req, res) => {
  res.json({ blogs });
});

// Get single blog
router.get('/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  const blog = blogs.find(b => b.id === blogId);
  
  if (!blog) {
    return res.status(404).json({ message: 'Blog not found' });
  }
  
  res.json({ blog });
});

// Create blog
router.post('/', (req, res) => {
  const { title, content, authorId } = req.body;
  
  const newBlog = {
    id: blogs.length + 1,
    title,
    content,
    author: 'demo', // For now, hardcoded
    authorId: authorId || 1,
    createdAt: new Date().toISOString(),
    likes: 0,
    comments: []
  };
  
  blogs.push(newBlog);
  
  res.status(201).json({
    message: 'Blog created successfully',
    blog: newBlog
  });
});

// Update blog
router.put('/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  const { title, content } = req.body;
  
  const blogIndex = blogs.findIndex(b => b.id === blogId);
  if (blogIndex === -1) {
    return res.status(404).json({ message: 'Blog not found' });
  }
  
  blogs[blogIndex] = {
    ...blogs[blogIndex],
    title: title || blogs[blogIndex].title,
    content: content || blogs[blogIndex].content
  };
  
  res.json({
    message: 'Blog updated successfully',
    blog: blogs[blogIndex]
  });
});

// Delete blog
router.delete('/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  const blogIndex = blogs.findIndex(b => b.id === blogId);
  
  if (blogIndex === -1) {
    return res.status(404).json({ message: 'Blog not found' });
  }
  
  blogs.splice(blogIndex, 1);
  
  res.json({ message: 'Blog deleted successfully' });
});

module.exports = router; 