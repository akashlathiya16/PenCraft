# 📝 PenCraft - Advanced Blogging Platform

> **Modern Full-Stack Blogging Platform** with WebGL Effects, Community Features & Advanced Content Management

![Project Status](https://img.shields.io/badge/Status-Production_Ready-green)
![Version](https://img.shields.io/badge/Version-2.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 📚 Documentation

| Document | Description | Audience |
|----------|-------------|----------|
| **[📖 README.md](README.md)** | Project overview, installation & setup guide | Users & Contributors |
| **[🎓 LEARNING-GUIDE.md](LEARNING-GUIDE.md)** | Complete technical deep dive & learning resource | Students & Developers |

> **👨‍🎓 For Students**: Check out our comprehensive [**Learning Guide**](LEARNING-GUIDE.md) to understand every technology and feature in detail!

---

## 🚀 Quick Navigation

- **🏠 [Project Overview](#-key-features)** - Main features and capabilities
- **⚙️ [Installation Guide](#-installation--setup)** - Setup instructions  
- **🎓 [Learning Guide](LEARNING-GUIDE.md)** - Complete technical documentation
- **💻 [Running the App](#-running-the-application)** - How to start the project
- **📊 [Tech Stack](#-complete-tech-stack)** - Technologies used
- **🔧 [API Documentation](#-api-documentation)** - Backend endpoints

## 🌟 Features

### Core Blogging Features
- **Rich Text Editor** - Create beautiful blog posts with advanced formatting
- **Post Management** - Create, edit, delete, and organize your posts
- **Categories & Tags** - Organize content with customizable categories and tags
- **Comments System** - Engage with readers through threaded comments
- **Like System** - Let readers show appreciation for your content
- **Save Posts** - Bookmark posts for later reading

### Community Features
- **Communities** - Join topic-based communities and connect with like-minded people
- **User Profiles** - Detailed user profiles with activity history
- **Community Management** - Create and manage your own communities
- **Member Management** - Join/leave communities with real-time updates

### Content Discovery
- **Explore Page** - Discover trending content and popular posts
- **Search Functionality** - Advanced search across posts, authors, and tags
- **Saved Posts** - Personal collection of bookmarked articles
- **Trending Posts** - Algorithm-based content recommendations

### User Experience
- **Modern UI/UX** - Beautiful, responsive design with smooth animations
- **WebGL Effects** - Interactive background effects and particle systems
- **Dark Theme** - Eye-friendly dark mode interface
- **Responsive Design** - Works perfectly on all devices
- **Real-time Updates** - Live updates for likes, comments, and community actions

### Authentication & Security
- **User Authentication** - Secure login/register system
- **Protected Routes** - Route protection for authenticated users
- **Profile Management** - Update profile information and preferences
- **Session Management** - Persistent login sessions

## 🛠️ Complete Tech Stack

### **Frontend Technologies**
| Technology | Version | Purpose |
|------------|---------|---------|
| **React.js** | ^18.2.0 | Core frontend framework |
| **Redux Toolkit** | ^1.9.0 | State management |
| **React Router DOM** | ^6.8.0 | Client-side routing |
| **Tailwind CSS** | ^3.3.0 | Utility-first CSS framework |
| **Framer Motion** | ^10.16.0 | Smooth animations |
| **Three.js/WebGL** | ^0.158.0 | Interactive background effects |
| **GSAP** | ^3.12.0 | Advanced animations |
| **OGL** | ^0.0.0 | WebGL utilities |

### **Backend Technologies**
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | Latest | Runtime environment |
| **Express.js** | ^4.18.0 | Web application framework |
| **MongoDB** | Latest | NoSQL database |
| **JWT** | ^9.0.0 | Authentication tokens |
| **bcrypt** | ^5.1.0 | Password hashing |
| **Multer** | ^1.4.0 | File upload handling |
| **Helmet** | ^7.0.0 | Security middleware |
| **CORS** | ^2.8.0 | Cross-origin requests |

### **Development Tools**
- **Concurrently** ^8.2.0 - Run frontend and backend simultaneously
- **Nodemon** ^3.0.0 - Auto-restart server during development
- **ESLint** ^8.0.0 - Code linting and formatting
- **PostCSS** ^8.4.0 - CSS processing
- **Git** - Version control

## 🚀 Installation & Setup

### **Prerequisites**
- Node.js (v16.0.0 or higher)
- npm or yarn package manager
- Git for version control

### **1. Clone Repository**
```bash
git clone https://github.com/yourusername/pencraft-blog.git
cd pencraft-blog
```

### **2. Install Dependencies**
```bash
# Install all dependencies (frontend + backend)
npm run install-all
```

### **3. Start Development Server**
```bash
# Start both frontend and backend
npm run dev
```

### **4. Access the Application**
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

### **5. Environment Configuration (Optional)**
For production deployment, create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 💻 Running the Application

### **Method 1: One-Click Development Mode**
```bash
npm run dev
```
✅ **Automatically starts both servers**  
✅ **Backend**: `http://localhost:5000`  
✅ **Frontend**: `http://localhost:3000`  

### **Method 2: Individual Server Control**
**Terminal 1 - Backend Server:**
```bash
npm run server
```
✅ Backend runs on: `http://localhost:5000`

**Terminal 2 - Frontend Development Server:**
```bash
npm run client
```
✅ Frontend runs on: `http://localhost:3000`

### **Method 3: Production Build**
```bash
# Build frontend for production
npm run build

# Serve production build
npx serve -s build -l 3000
```

## 🏗️ Project Structure

```
Blog/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   ├── auth.js          # Authentication routes
│   │   │   ├── users.js         # User management routes
│   │   │   ├── blogs.js         # Blog post routes
│   │   │   └── communities.js   # Community routes
│   │   └── index.js             # Main server file
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/          # Reusable components
│   │   │   └── layout/          # Layout components
│   │   ├── pages/
│   │   │   ├── auth/            # Authentication pages
│   │   │   ├── blog/            # Blog-related pages
│   │   │   └── *.jsx            # Main page components
│   │   ├── store/               # Redux store and slices
│   │   ├── services/            # API services
│   │   └── utils/               # Utility functions
│   └── package.json
└── package.json
```

## 🔧 Available Scripts

### Root Directory
- `npm run dev` - Start both frontend and backend in development mode
- `npm run server` - Start only the backend server
- `npm run client` - Start only the frontend development server
- `npm run install-all` - Install dependencies for all packages
- `npm run build` - Build the frontend for production

### Backend
- `npm run dev` - Start server with nodemon (auto-restart)
- `npm start` - Start production server

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

## 🎯 Key Features Implementation

### Community System
- **Join/Leave Communities**: Users can join and leave communities with real-time updates
- **Community Discovery**: Browse and search communities by category
- **Member Management**: Track community membership and activity
- **Profile Integration**: User profiles show joined communities

### Saved Posts System
- **Save/Unsave Posts**: Bookmark posts for later reading
- **Saved Posts Page**: Dedicated page to manage saved content
- **Search & Filter**: Search and filter saved posts by category
- **Sort Options**: Sort by save date, post date, popularity, etc.

### Content Discovery
- **Trending Algorithm**: Posts ranked by engagement metrics
- **Category Filtering**: Filter content by categories
- **Advanced Search**: Search across titles, content, and tags
- **Time-based Filtering**: Filter by day, week, month, year

### User Experience Enhancements
- **Interactive Effects**: WebGL backgrounds and particle systems
- **Smooth Animations**: Hover effects and transitions
- **Responsive Design**: Mobile-first approach
- **Loading States**: Proper loading indicators and skeleton screens

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `POST /api/users/:id/join-community` - Join community
- `POST /api/users/:id/leave-community` - Leave community

### Blogs
- `GET /api/blogs` - Get all posts
- `GET /api/blogs/:id` - Get single post
- `POST /api/blogs` - Create new post
- `PUT /api/blogs/:id` - Update post
- `DELETE /api/blogs/:id` - Delete post

### Communities
- `GET /api/communities` - Get all communities
- `GET /api/communities/:id` - Get single community
- `POST /api/communities` - Create community
- `POST /api/communities/:id/join` - Join community
- `POST /api/communities/:id/leave` - Leave community

## 🎨 UI Components

### Common Components
- **Galaxy Background** - Interactive WebGL background
- **Magic Background** - Animated gradient backgrounds
- **Particles System** - Dynamic particle effects
- **Target Cursor** - Custom cursor with target effects
- **Notifications** - Toast notifications system
- **Protected Route** - Route protection wrapper

### Layout Components
- **Navbar** - Main navigation with user menu
- **Layout** - Main layout wrapper with background effects

## 🚀 Deployment

### **Frontend Deployment (Netlify/Vercel)**
```bash
# Build the frontend
npm run build

# Deploy 'build' folder to hosting service
# Netlify: Drag and drop build folder
# Vercel: Connect GitHub repository
```

### **Backend Deployment (Heroku/Railway)**
```bash
# Add Procfile for Heroku
echo "web: node backend/src/index.js" > Procfile

# Set environment variables on hosting platform
MONGODB_URI=<your_production_mongodb_uri>
JWT_SECRET=<your_production_jwt_secret>
PORT=5000
NODE_ENV=production
```

### **Environment Variables**
```env
# Production Configuration
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pencraft
JWT_SECRET=your_super_secure_jwt_secret_key_here
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.com
```

---

## 🛡️ Security Features

- **JWT Authentication** with secure token handling
- **Password Encryption** using bcrypt with salt rounds
- **Input Validation** for all user inputs
- **Protected Routes** with authentication middleware
- **CORS Configuration** for secure cross-origin requests
- **Environment Variables** for sensitive configuration
- **Helmet Middleware** for security headers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 🔄 Version History

- **v2.0.0** (Latest) - Complete MERN stack implementation with communities, search, and WebGL effects
- **v1.5.0** - Enhanced UI/UX with advanced animations and effects
- **v1.0.0** - Initial release with core blogging functionality

### **What's New in v2.0.0:**
- ✅ **Community System**: Join/leave communities with real-time updates
- ✅ **Advanced Search**: Multi-field search with filtering and sorting
- ✅ **Saved Posts**: Bookmark and manage saved content
- ✅ **WebGL Effects**: Interactive backgrounds and particle systems
- ✅ **Modern UI**: Glassmorphism design with smooth animations
- ✅ **Redux Integration**: Centralized state management
- ✅ **Protected Routes**: Authentication-based access control

---

## 👨‍💻 Developer Information

**PenCraft Team**
- 🌐 GitHub: [@pencraft-team](https://github.com/pencraft-team)
- 📧 Email: support@pencraft.com
- 💼 LinkedIn: [Connect with us](https://linkedin.com/company/pencraft)
- 🌟 Portfolio: [View Projects](https://pencraft.com)

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Unsplash** for beautiful stock images
- **React Community** for excellent documentation and tools
- **Tailwind CSS** for the utility-first CSS framework
- **Three.js** for WebGL capabilities
- **Redux Toolkit** for state management
- **Framer Motion** for animations

---

## 📞 Support

For support and questions:
- 🐛 **Bug Reports**: Create an issue on GitHub
- 📧 **Email**: support@pencraft.com
- 💬 **Discord**: Join our community server
- 📖 **Documentation**: Check our [Learning Guide](LEARNING-GUIDE.md)

---

**⭐ If you find this project helpful, please give it a star on GitHub!**

---

**PenCraft** - Where stories come to life ✨ 