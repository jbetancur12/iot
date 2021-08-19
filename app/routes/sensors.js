const express = require('express')
const router = express.Router()

const trimRequest = require('trim-request')

const { createSensor, getSensors } = require('../controllers/sensors')

const { validateCreateSensor } = require('../controllers/sensors/validators')

/*
 * Cities routes
 */

/*
 * Get all items route
 */

/*
 * Get items route
 */
router.get(
  '/',
  // requireAuth,
  // roleAuthorization(['admin']),
  trimRequest.all,
  getSensors
)

/*
 * Create new item route
 */
router.post('/', trimRequest.all, validateCreateSensor, createSensor)

module.exports = router
