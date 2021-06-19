const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const postFavSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
postFavSchema.plugin(toJSON);

/**
 * @typedef Favorites
 */
const Favorites = mongoose.model('Favorites', postFavSchema);

module.exports = Favorites;
