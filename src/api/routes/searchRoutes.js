// src/api/routes/searchRoutes.js
const express = require('express');
const searchController = require('../controllers/searchController');

const router = express.Router();

// Route for searching users with connection level
router.get('/search/:userId/:query', searchController.searchUsers);

module.exports = router;
