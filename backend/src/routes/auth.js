const express = require('express');
const router = express.Router();

// Mock user data for now
let users = [
  {
    id: 1,
    username: 'demo',
    email: 'demo@example.com',
    password: 'password123',
    communities: []
  }
];

// Register
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  
  // Check if user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  
  const newUser = {
    id: users.length + 1,
    username,
    email,
    password,
    communities: []
  };
  
  users.push(newUser);
  
  res.status(201).json({
    message: 'User registered successfully',
    user: { id: newUser.id, username: newUser.username, email: newUser.email }
  });
});

// Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  res.json({
    message: 'Login successful',
    user: { id: user.id, username: user.username, email: user.email, communities: user.communities }
  });
});

// Get current user
router.get('/me', (req, res) => {
  // For now, return the first user as demo
  const user = users[0];
  res.json({
    user: { id: user.id, username: user.username, email: user.email, communities: user.communities }
  });
});

module.exports = router; 