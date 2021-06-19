const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

// services
const { postService } = require('../services');

const posts = catchAsync(async (req, res) => {
  const data = await postService.queryPosts();
  res.status(httpStatus.OK).send(data);
});

const favorites = catchAsync(async (req, res) => {
  const data = await postService.queryFavorites();
  res.status(httpStatus.OK).send(data);
});

const addFavorites = catchAsync(async (req, res) => {
  const data = await postService.createFavorite(req.body);
  res.status(httpStatus.CREATED).send(data);
});

module.exports = {
  posts,
  favorites,
  addFavorites,
};
