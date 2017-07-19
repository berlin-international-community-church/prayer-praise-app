'use strict';

exports.seed = (knex, Promise) => {
  return knex('users')
    .insert({ name: 'Anonymous User', role: 'ANONYMOUS_USER' });
};
