const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const SensorSchema = new mongoose.Schema(
  {
    deviceID: {
      type: String,
      required: true
    },
    humidity: {
      type: String,
      required: true
    },
    temperature: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
SensorSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Sensor', SensorSchema)
