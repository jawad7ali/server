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
    CASE
        WHEN f1.friendId IS NOT NULL THEN 1
        WHEN f2.friendId IS NOT NULL THEN 2
        ELSE 0
    END AS connection
    FROM 
        Users u
    LEFT JOIN 
        Friends f1 ON f1.friendId = u.id AND f1.userId = ` + userId + `
    LEFT JOIN 
        Friends f2 ON f2.friendId = u.id AND f2.userId IN (SELECT friendId FROM Friends WHERE userId = ` + userId + `) AND f1.friendId IS NULL
    WHERE 
        u.name LIKE '` + query + `%' AND u.id <> ` + userId + `
    LIMIT 20;`);
    return users;
  },

  // ... other methods
};

module.exports = User;
