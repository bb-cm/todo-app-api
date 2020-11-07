exports.up = (knex) => {
  const sql = knex.schema
    .createTable('user', (table) => {
      table.increments().primary();
      table.varchar('email', 128).notNullable().unique();
      table.varchar('password', 128).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('login_history', (table) => {
      table.increments().primary();
      table.bigint('user_id').notNullable();
      table
        .foreign('user_id')
        .references('id')
        .inTable('user')
        .onDelete('CASCADE');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('profile', (table) => {
      table.increments().primary();
      table.bigint('user_id').notNullable();
      table
        .foreign('user_id')
        .references('id')
        .inTable('user')
        .onDelete('CASCADE');
      table.varchar('name', 20).notNullable();
      table.date('date_of_birth').notNullable();
      table.specificType('style_setting', 'char(2)').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('todo', (table) => {
      table.increments().primary();
      table.bigint('user_id').notNullable();
      table
        .foreign('user_id')
        .references('id')
        .inTable('user')
        .onDelete('CASCADE');
      table.varchar('title', 100).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('todo_detail', (table) => {
      table.increments().primary();
      table.bigint('todo_id').notNullable();
      table
        .foreign('todo_id')
        .references('id')
        .inTable('todo')
        .onDelete('CASCADE');
      table.varchar('task', 100).notNullable();
      table.boolean('is_done').notNullable().defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('user_temporary', (table) => {
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
    .createTable('password_reissue', (table) => {
      table.increments().primary();
      table.varchar('email', 128).notNullable().unique();
      table.varchar('token', 64).notNullable();
      table
        .timestamp('token_validated_date')
        .notNullable()
        .defaultTo(knex.raw("current_timestamp + interval '60 minutes'"));
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  return sql;
};

exports.down = (knex) => {
  const sql = knex.schema
    .dropTable('posts')
    .dropTable('users')
    .dropTable('comments');
  return sql;
};
