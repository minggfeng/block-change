const express = require('express');

const router = express.Router();
const models = require('../../db/models');
const middleware = require('../middleware');

router.route('/create')
.post((req, res) => {
  models.Project.forge(req.body).save()
  .then((project) => {
    res.status(201).send(project.serialize());
  })
  .catch((err) => {
    console.log(err)
    res.sendStatus(500);
  });
});

module.exports = router;
