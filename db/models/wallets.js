const db = require('../index');

const Wallets = db.Model.extend({
    tableName: 'user_wallets',
});

module.exports = db.model('Wallets', Wallets);