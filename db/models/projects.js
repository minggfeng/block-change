const db = require('../');

const Project = db.Model.extend({
  tableName: 'projects',
  donations: () => this.hasMany('Donation'),
});

module.exports = db.model('Project', Project);
