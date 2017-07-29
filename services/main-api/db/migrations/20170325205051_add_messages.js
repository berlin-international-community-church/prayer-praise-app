'use strict';

exports.up = (knex, Promise) => {

  return knex.schema.createTable('messages', (table) => {

    table.increments('id').primary();
    table.integer('messageType');
    table.text('messageText');
    table.integer('sharedStatus');

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex, Promise) => {

  return knex.schema.dropTable('messages');
};
