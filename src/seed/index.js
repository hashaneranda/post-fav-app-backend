/* eslint-disable no-console */

const path = require('path');
const seeder = require('mongoose-seed');

// config
const configEnv = require('../config/config');

// libs
const mongoDb = require('../lib/mongoDb');

// seeders
const userSeeder = require('./user.seeder');
const postSeeder = require('./post.seeder');

// const dbPath = `mongodb+srv://root:helloroot@cluster0.cncxs.mongodb.net/<dbname>?retryWrites=true&w=majority`;

seeder.connect(configEnv.mongoose.url, { useNewUrlParser: true, useCreateIndex: true }, async () => {
  seeder.loadModels([path.join(__dirname, '../models/post.model'), path.join(__dirname, '../models/user.model')]);

  // Connect to MongoDB
  await mongoDb(configEnv.mongoose.url);

  seeder.clearModels(['Post', 'User'], async () => {
    const data = userSeeder();
    try {
      seeder.populateModels(data, () => {
        console.log('User Seeded successfully');
      });
    } catch (ex) {
      console.error(`Error occurred on ${ex.seed}`, ex.error);
      process.exit();
    }

    const dataModel = postSeeder();

    try {
      seeder.populateModels(dataModel, () => {
        console.log('Post Seeded successfully');
      });
    } catch (ex) {
      console.error(`Error occurred on ${ex.seed}`, ex.error);
      process.exit();
    }
  });

  return null;
});
