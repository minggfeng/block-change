const express = require('express');

const router = express.Router();
const models = require('../../db/models');

router.route('/login')
.post((req, res) => {
  models.User.where({email: req.body.email}).fetch()
  .then(user => {
    res.status(201).send(user.serialize());
  })
  .catch(err => {
    res.status(500).send(err);
  });
});

router.route('/signup')
.post((req, res) => {
  console.log('req.body: ', req.body);
  models.User.forge(req.body).save()
  .then((user) => {
    console.log('user: ', user);
    res.status(201).send(user.serialize());
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

module.exports = router;