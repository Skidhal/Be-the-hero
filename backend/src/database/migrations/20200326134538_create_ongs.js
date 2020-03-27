/*  O método up contém aquilo que acontecerá ao 
*   executar essa migration.
*/
exports.up = function(knex) {
 return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};
/*  O método down contém aquilo que acontecerá caso
*   ocorra um erro ou exceção.
*/
exports.down = function(knex) {
   return knex.schema.dropTable('ongs');
};
