const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message;
    const data = err.data;

    res.status(status).json({success: false, message: message, data: data});
}

export default errorHandler;
