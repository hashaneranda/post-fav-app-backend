const userData = require('./data/user.data.json');

const mapCollection = (name, documents) => [
  {
    model: name,
    documents,
  },
];

const mapUser = () => {
  const name = 'User';
  const result = mapCollection(name, userData);

  return result;
};

module.exports = mapUser;
