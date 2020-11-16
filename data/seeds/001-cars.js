exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: 1234567890,
          Make: "Nissan",
          Model: "Altima",
          Mileage: 30000,
        },
      ]);
    });
};

// tbl.increments();
// tbl.integer("VIN").unique().notNullable();
// tbl.string("Make", 50).notNullable();
// tbl.string("Model", 50).notNullable();
// tbl.integer("Mileage").notNullable();
// tbl.boolean("Clean");
// tbl.boolean("Salvage");
