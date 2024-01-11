// Defines routes related to friendship operations
const express = require('express');
const router = express.Router();
const friendsController = require('../controllers/friendsController');

router.get('/friend/:userId/:friendId', friendsController.addFriend);
router.get('/unfriend/:userId/:friendId', friendsController.removeFriend);

module.exports = router;
