const db = require('../');

const Donation = db.Model.extend({
  tableName: 'donations',
  projects: () => this.belongsTo('Project'),
});

module.exports = db.model('Donation', Donation);
