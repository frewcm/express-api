const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_DEV === 'production' ? err.message : err.stack
    })
    
    
}

module.exports = {
    errorHandler,
}