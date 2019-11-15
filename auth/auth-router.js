const router = require('express').Router();
const bcrypt = require('bcryptjs');

const users = require('../helpers/users-model');

const { getJwtToken } = require('../helpers/jwt-helpers');

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  const validationResult = validateUser(user);

  if (validationResult.isSuccessful) {
    const hash = bcrypt.hashSync(user.password, 14);
    user.password = hash;
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved)
      })
      .catch(err => {
        res.status(500).json({ message: 'Error creating user in Database', error: err.toStrin() })
      })
  } else {
    res.status(400).json({
      message: 'Invalid user information, see error for more information.',
      error: validationResult.errors
    })
  }
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
