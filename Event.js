const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  Orginizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  title: {
    type: String,
    required: true,
  },
  eventtype: {
    type: String,
  },
  image: {
    type: Buffer,
  },
  from: {
    type: Date,
    required: true,
  },
  to: {
    type: Date,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Event = mongoose.model('event', EventSchema);
