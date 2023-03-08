const router = require('express').Router();
const User = require('../../models/User');

// /api/user

// route to create/add a user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// This action method is the Controller. It accepts input and sends data to the Model and the View.
router.put('/:id', async (req, res) => {
  // It is sending the data to the Model so that one user can be updated with new data in the database.
  try {
    const user = await User.update(
      {
        username: req.body.username,
        password: req.body.password,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // The updated data (user) is then sent back to handler that dispatched the fetch request.
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;