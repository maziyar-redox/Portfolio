// Logger configuration for logging and keep tracking on events that occours on server
// In the future we will add logging server so the logs sent straight to the external server for
// Better managing and we will add log events so logs store on a file

import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

// Define log levels with custom priorities
const logLevels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
};

// Define colors for each log level
const logColors = {
    fatal: "red",
    error: "red",
    warn: "yellow",
    info: "green",
    debug: "blue",
    trace: "gray",
};

// Add colors to winston
winston.addColors(logColors);

// Determine appropriate log level based on environment
const getLogLevel = () => {
    const env = process.env.NODE_ENV || "development";
    const isDevelopment = env === "development";
    return isDevelopment ? "debug" : "info";
};

// Define log format configuration
const consoleFormat = winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.colorize({ all: true }),
    winston.format.printf(({ timestamp, level, message, stack, ...meta }) => {
        let log = `${timestamp} [${level}]: ${message}`;
        if (stack) log += `\n${stack}`;
        if (Object.keys(meta).length > 0) log += `\n${JSON.stringify(meta, null, 2)}`;
        return log;
    })
);

const fileFormat = winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.timestamp(),
    winston.format.json()
);

// Configure transports
const transports: winston.transport[] = [
    new winston.transports.Console({
        format: consoleFormat,
    }),
    new DailyRotateFile({
        filename: "logs/application-%DATE%.log",
        datePattern: "YYYY-MM-DD",
        zippedArchive: true,
        maxSize: "20m",
        maxFiles: "14d",
        format: fileFormat,
    }),
    new DailyRotateFile({
        filename: "logs/error-%DATE%.log",
        datePattern: "YYYY-MM-DD",
        zippedArchive: true,
        maxSize: "20m",
        maxFiles: "30d",
        level: "error",
        format: fileFormat,
    }),
];

// Create and export the logger instance
const logger = winston.createLogger({
    level: getLogLevel(),
    levels: logLevels,
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports,
    exceptionHandlers: [
        new DailyRotateFile({
        filename: "logs/exceptions-%DATE%.log",
        datePattern: "YYYY-MM-DD",
        zippedArchive: true,
        maxSize: "20m",
        maxFiles: "30d",
        }),
    ],
    rejectionHandlers: [
        new DailyRotateFile({
        filename: "logs/rejections-%DATE%.log",
        datePattern: "YYYY-MM-DD",
        zippedArchive: true,
        maxSize: "20m",
        maxFiles: "30d",
        }),
    ],
});

// Export child logger function for contextual logging
const createChildLogger = (context: object) => {
    return logger.child(context);
};

export {
    createChildLogger,
    logger
};