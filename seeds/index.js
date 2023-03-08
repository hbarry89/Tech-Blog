const sequelize = require('../config/config');
const Post = require('../models/Post');
const postData = require('./post-seeds.json');
const User = require('../models/User');
const userData = require('./user-seeds.json');
const Comment = require('../models/Comment');
const commentData = require('./comment-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  })
  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  })
  await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();