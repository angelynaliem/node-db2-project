exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.integer("VIN").unique().notNullable();
    tbl.string("Make", 50).notNullable();
    tbl.string("Model", 50).notNullable();
    tbl.integer("Mileage").notNullable();
    tbl.boolean("Clean");
    tbl.boolean("Salvage");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
