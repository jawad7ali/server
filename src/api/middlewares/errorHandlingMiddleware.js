// Error handling middleware
const errorHandlingMiddleware = (err, req, res, next) => {
    // Log the error for debugging purposes
    console.error(err);

    // Determine the status code: if the error object has a 'status' property, use it; otherwise, default to 500
    const statusCode = err.status || 500;

    // Respond to the client
    // You can customize the response based on the error or keep it generic
    res.status(statusCode).json({
        success: false,
        message: err.message || "An unexpected error occurred.",
    });
};

module.exports = errorHandlingMiddleware;
