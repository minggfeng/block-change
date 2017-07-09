const db = require('../');

const Project = db.Model.extend({
  tableName: 'projects',
  donations: function() {
    return this.hasMany('Donation');
  }
});

module.exports = db.model('Project', Project);