const router = require('express').Router();
const { Post, Comment, User } = require('../models');

// route to get all posts

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();
    res.json(postData)
  } catch(err){
    res.status(500).json(err);
  }
})
// Act 18
// router.get('/', async (req, res) => {
//   try {
//     const postData = await Post.findAll({
//     });

//     const posts = postData.map((post) =>
//       post.get({ plain: true })
//     );
//     res.render('homepage', {
//       posts
//       // loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
