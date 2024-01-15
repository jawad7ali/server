const db = require('../../database'); // Adjust this to your actual database access module

const User = {
  // Define other model methods as needed

  // Method to search for users and determine the connection level
  search: async (userId, query) => {
    User
    const users = await db.all(`
    SELECT 
    u.id, 
    u.name,
    MIN(CASE
        WHEN f.userId IS NOT NULL THEN 1
        WHEN ff.userId IS NOT NULL THEN 2
        ELSE 0
    END) AS connection
    FROM 
        Users u
    LEFT JOIN 
        Friends f ON f.friendId = u.id AND f.userId = ${userId}
    LEFT JOIN 
        Friends ff ON ff.friendId = u.id AND ff.userId IN (SELECT friendId FROM Friends WHERE userId = ${userId})
    WHERE 
        u.name LIKE '${query}%' AND u.id <> ${userId}
    GROUP BY u.id, u.name
    LIMIT 20;`);
    return users;
  },

  // ... other methods
};

module.exports = User;
