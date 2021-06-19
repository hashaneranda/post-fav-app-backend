const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const commentSchema = mongoose.Schema({
  comment: String,
});

const postSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
    },
    hashtags: [
      {
        type: String,
      },
    ],
    images: [
      {
        type: String,
      },
    ],
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
postSchema.plugin(toJSON);

/**
 * @typedef Post
 */
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
