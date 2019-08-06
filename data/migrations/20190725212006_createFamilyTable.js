
exports.up = function (knex) {
   return knex.schema.createTable('family', family => {
      family.increments();
      family.string('name', 128).notNullable().unique();
      family.string('relationship', 128).notNullable();
   })
};

exports.down = function (knex) {
   return knex.schema.dropTableIfExists('family')
};
