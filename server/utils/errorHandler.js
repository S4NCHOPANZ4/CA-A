class ErrorHandler extends Error{
    constructor(message, statusCode, additionalMessage){
        super(message);
        this.statusCode = statusCode;
        this.additionalMessage = additionalMessage

        Error.captureStackTrace(this, this.constructor);  
    }
}

module.exports = ErrorHandler;