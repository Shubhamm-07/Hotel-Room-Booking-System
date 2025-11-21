/**
 * @name Hotel Room Booking System
 * @author Md. Samiur Rahman (Mukul)
 * @description Hotel Room Booking and Management System Software ~ Developed By Md. Samiur Rahman (Mukul)
 * @copyright ©2023 ― Md. Samiur Rahman (Mukul). All rights reserved.
 * @version v0.0.1
 *
 */

const { successResponse, errorResponse } = require('../configs/app.response');

// 


function defaultController(_req, res) {
  try {
    res.status(200).json({
      success: true,
      message: 'Hotel Room Booking System API',
      status: 'running'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}

module.exports = defaultController;

module.exports = defaultController;
