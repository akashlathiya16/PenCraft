const express = require('express');
const router = express.Router();

// Mock user data (same as auth.js for now)
let users = [
  {
    id: 1,
    username: 'demo',
    email: 'demo@example.com',
    password: 'password123',
    communities: []
  }
];

// Get user profile
router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  res.json({
    user: { 
      id: user.id, 
      username: user.username, 
      email: user.email, 
      communities: user.communities 
    }
  });
});

// Update user profile
router.put('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { username, email } = req.body;
  
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  users[userIndex] = {
    ...users[userIndex],
    username: username || users[userIndex].username,
    email: email || users[userIndex].email
  };
  
  res.json({
    message: 'Profile updated successfully',
    user: { 
      id: users[userIndex].id, 
      username: users[userIndex].username, 
      email: users[userIndex].email,
      communities: users[userIndex].communities
    }
  });
});

// Join community
router.post('/:id/join-community', (req, res) => {
  const userId = parseInt(req.params.id);
  const { communityId } = req.body;
  
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  // Check if user is already in the community
  if (users[userIndex].communities.includes(communityId)) {
    return res.status(400).json({ message: 'User is already a member of this community' });
  }
  
  // Add community to user's communities
  users[userIndex].communities.push(communityId);
  
  res.json({
    message: 'Successfully joined community',
    user: { 
      id: users[userIndex].id, 
      username: users[userIndex].username, 
      email: users[userIndex].email,
      communities: users[userIndex].communities
    }
  });
});

// Leave community
router.post('/:id/leave-community', (req, res) => {
  const userId = parseInt(req.params.id);
  const { communityId } = req.body;
  
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  // Remove community from user's communities
  users[userIndex].communities = users[userIndex].communities.filter(id => id !== communityId);
  
  res.json({
    message: 'Successfully left community',
    user: { 
      id: users[userIndex].id, 
      username: users[userIndex].username, 
      email: users[userIndex].email,
      communities: users[userIndex].communities
    }
  });
});

module.exports = router; 