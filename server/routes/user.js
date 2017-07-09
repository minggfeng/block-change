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
    models.Wallets.where({profile_id: -1}).fetch()
    .then(wallet => {
      console.log('wallet: ', wallet);
      user.attributes.profile_wallet = wallet.attributes.wallet_address;
      user.set({profile_wallet: wallet.attributes.wallet_address }).save();
      console.log('user2: ', user);
      console.log('wallet_address: ', wallet.attributes.wallet_address);
      wallet.set({profile_id: user.attributes.id}).save();
      res.status(201).send(user.serialize());
    })
    .catch(err => {
      console.error(err);
    });
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

module.exports = router;