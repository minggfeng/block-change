const express = require('express');

const router = express.Router();
const models = require('../../db/models');
// const middleware = require('../middleware');

router.route('/create')
.post((req, res) => {
  models.Project.forge(req.body).save()
  .then((project) => {
    res.status(201).send(project.id);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

module.exports = router;
