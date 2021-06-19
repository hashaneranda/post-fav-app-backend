const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const register = catchAsync(async (req, res) => {
  res.status(httpStatus.CREATED).send();
});

module.exports = {
  register,
};
