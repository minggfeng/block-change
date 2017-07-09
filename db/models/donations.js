const db = require('../');

const Donation = db.Model.extend({
  tableName: 'donations',
  projects: function() {
    return this.belongsTo('Project');
  }
});

module.exports = db.model('Donation', Donation);