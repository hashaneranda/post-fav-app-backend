const { Post } = require('../models');
const { Favorite } = require('../models');

/**
 * Query for posts
 * @returns {Promise<Post>}
 */
const queryPosts = async () => {
  const posts = await Post.find();
  return posts;
};

/**
 * Get post by id
 * @param {ObjectId} id
 * @returns {Promise<Post>}
 */
const getPostById = async (id) => {
  return Post.findById(id);
};

/**
 * Create a user
 * @param {Object} body
 * @returns {Promise<Favorite>}
 */
const createFavorite = async (body) => {
  const post = await Favorite.create(body);
  return post;
};

/**
 * Get favorite by id
 * @param {ObjectId} id
 * @returns {Promise<Favorite>}
 */
const getFavoriteById = async (id) => {
  return Favorite.findById(id);
};

/**
 * Query for Favorite
 * @returns {Promise<Favorite>}
 */
const queryFavorites = async () => {
  const posts = await Favorite.find().populate('post');
  return posts;
};

module.exports = {
  queryPosts,
  getPostById,
  createFavorite,
  getFavoriteById,
  queryFavorites,
};
