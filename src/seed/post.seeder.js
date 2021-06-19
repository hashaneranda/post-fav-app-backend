const postData = require('./data/post.data.json');

const mapCollection = (name, documents) => [
  {
    model: name,
    documents,
  },
];

const mapPosts = () => {
  const name = 'Post';
  const result = mapCollection(name, postData);

  return result;
};

module.exports = mapPosts;
