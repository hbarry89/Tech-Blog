const router = require('express').Router();
const { Post, Comment, User } = require('../models');

// route to get all posts

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();
    const posts = postData.map(post => post.get({plain:true}))
    res.render('homepage', {posts})
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

router.get('/dashboard', async (req, res) => {
  try {
    res.render('dashboard')
  } catch(err){
    res.status(500).json(err);
  }
})

router.get('/login', async (req, res) => {
  try {
    res.render('login')
  } catch(err){
    res.status(500).json(err);
  }
})

router.get('/logout', async (req, res) => {
  try {
    res.render('logout')
  } catch(err){
    res.status(500).json(err);
  }
})

module.exports = router;
