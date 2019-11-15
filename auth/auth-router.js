const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../helpers/users-model');

const { validateUser } = require('../helpers/users-helpers');
const { getJwtToken } = require('../helpers/jwt-helpers');

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  const validationResult = validateUser(user);

  if (validationResult.isSuccessful) {
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved)
      })
      .catch(err => {
        res.status(500).json({ message: 'Error creating user in Database', error: err.toString() })
      })
  } else {
    res.status(400).json({
      message: 'Invalid user information, see error for more information.',
      error: validationResult.errors
    })
  }
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;
  console.log(`post/login`, username, password)

  Users.findBy({ username })
    .then(user => {
      console.log(`findByName, user`, user)
      if (user && bcrypt.compareSync(password, user.password)) {
        // 2: produce a token
        const token = getJwtToken(user.username, user.department);

        // 3: send the token to the client
        res.status(200).json({
          message: `Welcome ${user.username}! have a token...`,
          token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: error.toString() });
    });
});

module.exports = router;
