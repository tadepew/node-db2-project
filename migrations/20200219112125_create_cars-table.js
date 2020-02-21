exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .string("VIN")
      .notNullable()
      .index();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl.integer("mileage").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
