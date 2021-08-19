const Sensor = require('../../models/sensor')
const { createItem } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createSensor = async (req, res) => {
  try {
    req = matchedData(req)
    res.status(201).json(await createItem(req, Sensor))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createSensor }
