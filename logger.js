const os = require('os');
const winston = require('winston');
require('winston-syslog');

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.splat(),
        winston.format.simple()
    ),
    levels: winston.config.syslog.levels,
    transports: [papertrail],
});

module.exports = logger;
