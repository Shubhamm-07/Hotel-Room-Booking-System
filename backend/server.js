/**
 * @name Hotel Room Booking System
 * @author Md. Samiur Rahman (Mukul)
 * @description Hotel Room Booking and Management System Software ~ Developed By Md. Samiur Rahman (Mukul)
 * @copyright ©2023 ― Md. Samiur Rahman (Mukul). All rights reserved.
 * @version v0.0.1
 *
 */

// imports modules & dependencies
const app = require('./src/app');
const logger = require('./src/middleware/winston.logger');


const PORT = process.env.PORT || 8080;

// Add crash handlers
process.on('uncaughtException', (error) => {
  logger.error('UNCAUGHT EXCEPTION:', error);
  logger.error('Stack:', error.stack);
});

process.on('unhandledRejection', (reason) => {
  logger.error('UNHANDLED REJECTION:', reason);
});

app.listen(PORT, '0.0.0.0', () => {
  logger.info(`App server running on port: ${PORT}`);
});

// app listens to .env defined port
// app.listen(process.env.APP_PORT, () => {
//   logger.info(`App server running on: ${process.env.APP_BASE_URL}`);
// });
