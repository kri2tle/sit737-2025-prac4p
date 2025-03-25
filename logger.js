
//it sets up winston , logging library which is used to record errors and server updates 
// createLogger -> Creates a new logger instance.
// format -> Defines the structure of log messages.
// transports -> Specifies where the logs should be stored (console, file, etc.).

const { createLogger, format, transports } = require("winston");


//creates logger instances with defauult log 
const logger = createLogger({
    level: "info",

    format: format.combine(

        //it adds timestamp
        format.timestamp(),

        //defines how logs should display 
        format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
    transports: [

        //this aremessages to the terminal
        new transports.Console(), 

        //saves logs in server.log file 
        new transports.File({ filename: "server.log" }) 
    ]
});

//export the logger instance to server.js so that we can use logger file 
module.exports = logger;
