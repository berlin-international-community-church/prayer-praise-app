'use strict';

exports.up = (knex, Promise) => {

  return knex.schema.createTable('users', (table) => {

    table.increments('id').primary();
    table.text('email').unique();
    table.text('username');
    table.text('password');

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex, Promise) => {

  return knex.schema.dropTable('users');
};
