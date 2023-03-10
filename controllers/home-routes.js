const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth')

// route to get all posts

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();
    const posts = postData.map(post => post.get({plain:true}))
    console.log(posts);
    res.render('homepage', {posts, loggedIn: req.session.loggedIn})
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

// router.get('/dashboard', withAuth, async (req, res) => {
//   try {
//     req.session.save(() => {
//       if(req.session.loggedIn) {
//         res.render('dashboard', {
//           loggedIn: req.session.loggedIn,
//        })
//       }
//     })
//   } catch(err){
//     res.status(500).json(err);
//   }
// })

router.get('/dashboard', withAuth, async (req, res) => {
  try {
        res.render('dashboard', {loggedIn: req.session.loggedIn})
      }
  catch(err){
    res.status(500).json(err);
  }
})

router.get('/login', async (req, res) => {
  try {
    res.render('login', {loggedIn: req.session.loggedIn})
  } catch(err){
    res.status(500).json(err);
  }
})

router.get('/logout', async (req, res) => {
  try {
    req.session.destroy(()=>{
      res.status(204).end();
    })
  } catch(err){
    res.status(500).json(err);
  }
})

module.exports = router;
