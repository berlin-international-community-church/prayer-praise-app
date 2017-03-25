'use strict';

/* $lab:coverage:off$ */
const environment = process.env.NODE_ENV || 'development';
const config      = require('../../knexfile.js')[environment];
const Pg          = require('pg');

Pg.types.setTypeParser(20, 'text', parseInt);
Pg.types.setTypeParser(1700, 'text', parseFloat);

module.exports    = require('knex')(config);
/* $lab:coverage:on$ */
