const mongoose = require('mongoose');

const CampainSchema = new mongoose.Schema({
  Orginizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  title: {
    type: String,
    required: true,
  },
  Ctype: {
    type: String,
  },
  content: {
    pole: [
      {
        name: {
          type: String,
          required: true,
        },
        percent: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  text: {
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

module.exports = Campain = mongoose.model('event', CampainSchema);
