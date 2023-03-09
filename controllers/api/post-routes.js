const router = require('express').Router();
const Post = require('../../models/Post');
const withAuth = require('../../utils/auth')

// /api/post

router.get('/', async (req, res) => {
  try {
      const postData = await Post.findAll();
      const posts = postData.map(post => post.get({plain:true}))
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route to create/add a post
router.post('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      body: req.body.body,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// This action method is the Controller. It accepts input and sends data to the Model and the View.
router.put('/:id', withAuth, async (req, res) => {
  // It is sending the data to the Model so that one post can be updated with new data in the database.
  try {
    const post = await Post.update(
      {
        title: req.body.title,
        body: req.body.body,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // The updated data (post) is then sent back to handler that dispatched the fetch request.
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;