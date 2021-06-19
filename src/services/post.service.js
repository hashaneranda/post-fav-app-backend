const httpStatus = require('http-status');
const { Post } = require('../models');
const { Favorite } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Query for posts
 * @returns {Promise<Post>}
 */
const queryPosts = async () => {
  const posts = await Post.find().populate('user').populate('comments.user');
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
 * Get favorite by id
 * @param {ObjectId} id
 * @returns {Promise<Favorite>}
 */
const getFavoriteById = async (id) => {
  return Favorite.findById(id);
};

/**
 * Get favorite by post
 * @param {ObjectId} post
 * @returns {Promise<Favorite>}
 */
const getFavoriteByPost = async (post) => {
  return Favorite.findOne({ post });
};

/**
 * Delete favorite by id
 * @param {ObjectId} id
 * @returns {Promise<Favorite>}
 */
const deleteFavoriteById = async (id) => {
  const data = await getFavoriteById(id);
  if (!data) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  await data.remove();
  return data;
};

/**
 * Create a favorite
 * @param {Object} body
 * @returns {Promise<Favorite>}
 */
const createFavorite = async (body) => {
  const data = await getFavoriteByPost(body.post);
  if (data) {
    const post = await deleteFavoriteById(data.id);
    return post;
  }
  const post = await Favorite.create(body);
  return post;
};

/**
 * Query for Favorite
 * @returns {Promise<Favorite>}
 */
const queryFavorites = async () => {
  const posts = await Favorite.find().populate('post').populate('post.user');
  return posts;
};

module.exports = {
  queryPosts,
  getPostById,
  createFavorite,
  getFavoriteById,
  queryFavorites,
};
