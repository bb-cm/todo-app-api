exports.up = (knex) => {
  const sql = knex.schema
    .createTable('users', (table) => {
      table.increments().primary();
      table.varchar('email', 128).notNullable().unique();
      table.varchar('password', 128).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('login_histories', (table) => {
      table.increments().primary();
      table.bigint('user_id').notNullable();
      table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('profiles', (table) => {
      table.increments().primary();
      table.bigint('user_id').notNullable();
      table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
      table.varchar('name', 20).notNullable();
      table.date('date_of_birth').notNullable();
      table.specificType('style_setting', 'char(2)').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('todos', (table) => {
      table.increments().primary();
      table.bigint('user_id').notNullable();
      table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
      table.varchar('title', 100).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('todo_details', (table) => {
      table.increments().primary();
      table.bigint('todo_id').notNullable();
      table
        .foreign('todo_id')
        .references('id')
        .inTable('todos')
        .onDelete('CASCADE');
      table.varchar('task', 100).notNullable();
      table.boolean('is_done').notNullable().defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('temporary_users', (table) => {
      table.increments().primary();
      table.varchar('email', 128).notNullable().unique();
      table.varchar('password', 128).notNullable();
      table.varchar('name', 20).notNullable();
      table.date('date_of_birth').notNullable();
      table.varchar('token', 64).notNullable();
      table
        .timestamp('token_validated_date')
        .notNullable()
        .defaultTo(knex.raw("current_timestamp + interval '60 minutes'"));
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('password_recovery', (table) => {
      table.increments().primary();
      table.varchar('email', 128).notNullable().unique();
      table.varchar('token', 64).notNullable();
      table
        .timestamp('token_validated_date')
        .notNullable()
        .defaultTo(knex.raw("current_timestamp + interval '60 minutes'"));
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  return sql;
};

exports.down = (knex) => {
  const sql = knex.schema
    .dropTable('users')
    .dropTable('login_histories')
    .dropTable('profiles')
    .dropTable('todos')
    .dropTable('todo_details')
    .dropTable('temporary_users')
    .dropTable('password_recovery');
  return sql;
};
