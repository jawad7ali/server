const Friend = require('../models/friend'); // Adjust the path to your friend model

exports.addFriend = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const friendId = parseInt(req.params.friendId, 10);

  if (userId === friendId) {
    return res.status(400).json({ success: false, message: "Users cannot friend themselves." });
  }

  try {
    await Friend.add(userId, friendId);
    res.status(201).json({ success: true, message: "Friend added successfully." });
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT') {
      res.status(409).json({ success: false, message: "Friendship already exists." });
    } else {
      res.status(500).json({ success: false, message: "Failed to add friend.", error: error.message });
    }
  }
};

exports.removeFriend = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const friendId = parseInt(req.params.friendId, 10);

  try {
    await Friend.remove(userId, friendId);
    res.status(200).json({ success: true, message: "Friend removed successfully." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to remove friend.", error: error.message });
  }
};
