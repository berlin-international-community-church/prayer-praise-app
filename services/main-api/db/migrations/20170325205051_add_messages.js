'use strict';

exports.up = function(knex, Promise) {

  return knex.schema.createTable('messages', (table) => {

    table.increments('id').primary();
    table.text('title').unique();
    table.text('body');

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};
