const express = require('express');
const router = express.Router();

// Mock community data
let communities = [
  {
    id: 1,
    name: 'Tech Enthusiasts',
    description: 'A community for technology lovers',
    members: [1], // User IDs
    createdAt: new Date().toISOString(),
    posts: []
  },
  {
    id: 2,
    name: 'Creative Writers',
    description: 'Share your creative writing and get feedback',
    members: [],
    createdAt: new Date().toISOString(),
    posts: []
  },
  {
    id: 3,
    name: 'Photography Club',
    description: 'Share your photography and learn from others',
    members: [],
    createdAt: new Date().toISOString(),
    posts: []
  }
];

// Get all communities
router.get('/', (req, res) => {
  res.json({ communities });
});

// Get single community
router.get('/:id', (req, res) => {
  const communityId = parseInt(req.params.id);
  const community = communities.find(c => c.id === communityId);
  
  if (!community) {
    return res.status(404).json({ message: 'Community not found' });
  }
  
  res.json({ community });
});

// Create community
router.post('/', (req, res) => {
  const { name, description, creatorId } = req.body;
  
  const newCommunity = {
    id: communities.length + 1,
    name,
    description,
    members: [creatorId || 1], // Creator is automatically a member
    createdAt: new Date().toISOString(),
    posts: []
  };
  
  communities.push(newCommunity);
  
  res.status(201).json({
    message: 'Community created successfully',
    community: newCommunity
  });
});

// Join community
router.post('/:id/join', (req, res) => {
  const communityId = parseInt(req.params.id);
  const { userId } = req.body;
  
  const communityIndex = communities.findIndex(c => c.id === communityId);
  if (communityIndex === -1) {
    return res.status(404).json({ message: 'Community not found' });
  }
  
  // Check if user is already a member
  if (communities[communityIndex].members.includes(userId)) {
    return res.status(400).json({ message: 'User is already a member of this community' });
  }
  
  // Add user to community members
  communities[communityIndex].members.push(userId);
  
  res.json({
    message: 'Successfully joined community',
    community: communities[communityIndex]
  });
});

// Leave community
router.post('/:id/leave', (req, res) => {
  const communityId = parseInt(req.params.id);
  const { userId } = req.body;
  
  const communityIndex = communities.findIndex(c => c.id === communityId);
  if (communityIndex === -1) {
    return res.status(404).json({ message: 'Community not found' });
  }
  
  // Remove user from community members
  communities[communityIndex].members = communities[communityIndex].members.filter(id => id !== userId);
  
  res.json({
    message: 'Successfully left community',
    community: communities[communityIndex]
  });
});

// Get community members
router.get('/:id/members', (req, res) => {
  const communityId = parseInt(req.params.id);
  const community = communities.find(c => c.id === communityId);
  
  if (!community) {
    return res.status(404).json({ message: 'Community not found' });
  }
  
  res.json({ members: community.members });
});

module.exports = router; 