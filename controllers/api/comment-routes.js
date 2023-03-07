const router = require('express').Router();
const Comment = require('../../models/Comment');

// route to create/add a comment
router.post('/', async (req, res) => {
  try {
    const commentData = await Comment.create({
        body: req.body.body,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// This action method is the Controller. It accepts input and sends data to the Model and the View.
router.put('/:id', async (req, res) => {
  // It is sending the data to the Model so that one comment can be updated with new data in the database.
  try {
    const comment = await Comment.update(
      {
        body: req.body.body,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // The updated data (comment) is then sent back to handler that dispatched the fetch request.
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;