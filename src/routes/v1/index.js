const express = require('express');
const postRoute = require('./post.route');
const docsRoute = require('./docs.route');

const router = express.Router();

router.use('/post', postRoute);
router.use('/docs', docsRoute);

module.exports = router;
