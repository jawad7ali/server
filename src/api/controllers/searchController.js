// src/api/controllers/searchController.js
const User = require('../models/user');

// Function to search for users and determine the connection level
exports.searchUsers = async (req, res) => {
    const userId = req.params.userId;
    const query = req.params.query;

    try {
        const users = await User.search(userId, query);
        res.status(200).json({ success: true, users });
    } catch (error) {
        res.status(500).json({ success: false, message: "An error occurred.", error: error.message });
    }
};
