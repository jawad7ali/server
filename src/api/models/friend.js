const db = require('../../database'); // Adjust this to your actual database access module

const Friend = {
  // Method to add a friend relationship
  add: async (userId, friendId) => {
    // Transaction to ensure both operations succeed or fail together
   // const transaction = await db.beginTransaction();

    try {
      await db.run('INSERT INTO Friends (userId, friendId) VALUES (' + userId + ',' + friendId + ')');
      await db.run('INSERT INTO Friends (userId, friendId) VALUES (' + friendId + ',' + userId + ')');

    //  await transaction.commit();
    } catch (error) {
    //  await transaction.rollback();
      throw error; // Re-throw the error to be handled by the caller
    }
  },

  // Method to remove a friend relationship
  remove: async (userId, friendId) => {
    // Transaction to ensure both operations succeed or fail together
    //const transaction = await db.beginTransaction();

    try {
      await db.run('DELETE FROM Friends WHERE userId = ' + userId + ' AND friendId = ' + friendId);
      await db.run('DELETE FROM Friends WHERE userId = ' + friendId + ' AND friendId = ' + userId);

  //    await transaction.commit();
    } catch (error) {
  //    await transaction.rollback();
      throw error; // Re-throw the error to be handled by the caller
    }
  },

  // ... other methods as needed
};

module.exports = Friend;
