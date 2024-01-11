// Aggregates all route modules and exports them
const express = require('express');
const router = express.Router();

const friendRoutes = require('./friendRoutes');
const searchRoutes = require('./searchRoutes');

router.use(friendRoutes);
router.use(searchRoutes);

module.exports = router;
