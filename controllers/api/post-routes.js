const router = require('express').Router();
const Post = require('../../models/Post');

// /api/post

// route to create/add a post
router.post('/', async (req, res) => {
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
router.put('/:id', async (req, res) => {
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

module.exports = router;