const db = require('../data/dbConfig');

module.exports = {
   get: function () {
      return db('family')
   },
   insert: function (post) {
      return db('family')
         .insert(post)
   },
   remove: function (id) {
      return db('family')
         .where('id', id)
         .del();
   }
}