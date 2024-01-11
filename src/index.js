const app = require('./app');
const { init } = require('./database/initDatabase'); // Import the init function

const startServer = async () => {
  try {
    console.log("Initializing database...");
    await init(); // Initialize the database
    app.listen(3001, () => {
      console.log('Server running on http://localhost:3001');
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
};

startServer();