const express = require('express');

const router = express.Router();
const Promise = require('bluebird');
const models = require('../../db/models');
const middleware = require('../middleware');
const helpers = require('../../ethereum/helpers');

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

router.route('/getBalance/:address')
.get((req, res) => {
  return new Promise((resolve, reject) => {
    console.log(req.params.address)
    return helpers.balance(req.params.address);
  })
  .then((data) => {
    res.send(data);
    console.log(data);
  })
  .catch((err) => { console.log(err); res.send({error: err}); })
})


module.exports = router;
