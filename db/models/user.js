const db = require('../index');

const User = db.Model.extend({
    tableName: 'profiles',
});

module.exports = db.model('User', User);